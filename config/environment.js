'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'draft-51',
    environment,
    contentSecurityPolicy: {'connect-src':"'self' wss://*.firebaseio.com"},
    firebase: {
      apiKey: "AIzaSyDxh_TCBesDXE_nIWtmnmVE9WwmKELWp9o",
      authDomain: "e-toll-system-h1206.firebaseapp.com",
      databaseURL: "https://e-toll-system-h1206.firebaseio.com",
      projectId: "e-toll-system-h1206",
      storageBucket: "e-toll-system-h1206.appspot.com",
      messagingSenderId: "459181590303"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/';
    // here you can enable a production-specific feature
  }

  return ENV;
};
