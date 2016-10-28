# Meteor wrapper for the Act! Web API

Act! Web API is a RESTful, JSON based API for [Act! Premium](https://www.act.com/products/act-premium) - Windows, Web, or Cloud. This wrapper provides a 'Meteor-ized' interface for interacting with the Act! Web API.


## API Documentation

[Act! Premium Web API Documentation](Act! Premium Web API Documentation)


## Wrapper Documentation

[Meteor Act! Web API Wrapper](http://chrisbutler.github.io/act.web.api/)


## Installation

```
meteor add chrisbutler:act.web.api
```


## Example Usage

##### In `settings.json`:
```javascript
"act": {
  "username": "<ActUser>",
  "password": "<UserPassword>",
  "database": "<DatabaseName>",
  "endpoint": "<ApiURL>"
}
```

##### On the server:

```javascript
import { ActWebAPI } from 'meteor/chrisbutler:act.web.api';

var act = new ActWebAPI();

var contact = act.contacts('findOne', {id: '<contactId>'});
```
