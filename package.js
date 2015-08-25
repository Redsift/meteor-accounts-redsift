Package.describe({
  name: 'redsift:accounts-redsift',
  summary: "Accounts service for Redsift accounts",
  version: "1.0.0",
  git: "https://github.com/redsift/meteor-accounts-redsift.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4')

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('redsift:oauth-redsift', ['client', 'server']);

  api.addFiles('redsift-common.js', ['client', 'server']);
  api.addFiles('redsift-server.js', 'server');
  api.addFiles('redsift-client.js', 'client');
});