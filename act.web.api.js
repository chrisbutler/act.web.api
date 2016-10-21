import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

class ActWebAPI {
  constructor() {
    const { username, password, database, endpoint } = Meteor.settings.act;
    this.username = username;
    this.password = password;
    this.database = database;
    this.endpoint = endpoint;
    this.token = this.authorize();
    this.methods = {
      lists: {
        subscribe() {

        },
      },
    };
  }

  request(action, endpoint, args) {
    const url = `https://${this.endpoint}/act.web.api/${endpoint}`;
    try {
      const request = HTTP.call(action, url, args);
      return request;
    } catch (error) {
      return error;
    }
  }

  authorize() {
    var opts = {
      auth: `${this.username}:${this.password}`,
      headers: {
        'Act-Database-Name': this.database
      }
    }
    const response = this.request('GET', 'authorize', opts);
    if (response.content) {
      return response.content;
    } else {
      throw new Meteor.Error(500, 'Act! Token not received.');
    }
  }

  action(action, method, params) {
    const methodToCall = this.methods[action][method](params);
    return this.request(methodToCall, params);
  }

  contacts(method, params) {
    return this.action('contacts', method, params);
  }
}

export { ActWebAPI };
