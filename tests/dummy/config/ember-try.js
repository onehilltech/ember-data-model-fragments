'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
<<<<<<< HEAD
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
            'ember-data': '~3.28.0',
          },
        },
      },
      {
=======
>>>>>>> a731500 (v4.10.0...v4.12.2)
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
            'ember-data': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-4.6',
        npm: {
          devDependencies: {
            'ember-source': '~4.6.0',
            'ember-data': '~4.6.0',
          },
        },
      },
      {
        name: 'ember-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
            'ember-data': '~4.8.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-data': 'latest',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            'ember-data': 'beta',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            'ember-data': 'canary',
          },
        },
      },
<<<<<<< HEAD
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
            'ember-data': '~3.28.0',
          },
          ember: {
            edition: 'classic',
          },
        },
      },
=======
>>>>>>> a731500 (v4.10.0...v4.12.2)
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
