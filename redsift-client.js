/* global Redsift */
Meteor.loginWithRedsift = function(options, callback) {

  if (!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Redsift.requestCredential(options, credentialRequestCompleteCallback);
};