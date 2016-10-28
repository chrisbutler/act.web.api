# Meteor wrapper for the Act! Web API

### Documentation

<http://chrisbutler.github.io/act.web.api>

### Installation

```
meteor add chrisbutler:act.web.api
```

### Example Usage

In `settings.json`:
```
"act": {
  "username": "<ActUser>",
  "password": "<UserPassword>",
  "database": "<DatabaseName>",
  "endpoint": "<ApiURL>"
}
```

On the server:

```
import { ActWebAPI } from 'meteor/chrisbutler:act.web.api';

var act = new ActWebAPI();

var contact = act.contacts('findOne', {id: '<contactId>'});
```
