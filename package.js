Package.describe({
  name: 'act.web.api',
  version: '0.0.1',
  summary: 'Meteor wrapper for the Act! Web API',
  git: 'https://github.com/chrisbutler/act.web.api',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.2');
  api.use('ecmascript');
  api.mainModule('act.web.api.js');
});
