Package.describe({
  name: 'chrisbutler:act.web.api',
  version: '0.1.1',
  summary: 'Meteor wrapper for the Act! Web API',
  git: 'https://github.com/chrisbutler/act.web.api',
  documentation: 'README.md'
});

Npm.depends({});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.2');
  api.use(['ecmascript', 'http'], 'server');
  api.mainModule('act.web.api.js', 'server');
});
