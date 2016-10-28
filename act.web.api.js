import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

class ActWebAPI {
  /**
  * Act! Web API Interface
  * @constructor
  */
  constructor() {
    const { username, password, database, endpoint } = Meteor.settings.act;
    this.username = username;
    this.password = password;
    this.database = database;
    this.endpoint = endpoint;
    this.token = this.authorize();
    this.methods = {
      contacts: {
        findOne(params) {
          return {
            type: 'GET',
            endpoint: `api/Contacts/${params.id}`
          }
        },
        find() {
          return {
            type: 'GET',
            endpoint: 'api/Contacts'
          }
        },
        insert() {
          return {
            type: 'POST',
            endpoint: 'api/Contacts/'
          }
        },
        update(params) {
          return {
            type: 'PUT',
            endpoint: `api/Contacts/${params.id}`
          }
        },
        remove(params) {
          return {
            type: 'DELETE',
            endpoint: `api/Contacts/${params.id}`
          }
        }
      }
    };
  }

  request(action, args) {
    const url = `https://${this.endpoint}/act.web.api/${action.endpoint}`;
    try {
      return HTTP.call(action.type, url, args);
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
    const response = this.request({type :'GET', endpoint: 'authorize'}, opts);
    if (response.content) {
      return response.content;
    } else {
      throw new Meteor.Error(500, 'Act! Token not received.');
    }
  }

  action(action, method, params) {
    const methodToCall = this.methods[action][method](params);
    var opts = {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    };
    return this.request(methodToCall, opts);
  }

  /**
  * Interact with the Contacts endpoint
  * @param  {Function} method  find, findOne, insert, update, remove
  */

  contacts(method, params) {
    return this.action('contacts', method, params);
  }

}

export { ActWebAPI };
