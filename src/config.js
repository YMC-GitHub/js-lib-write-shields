// include some lib
const fs = require('fs');
const path = require('path');
const utils = require('./utils');

const rootPath = path.resolve(__dirname, '..');
// eslint-disable-next-line no-unused-vars
const resolve = file => path.resolve(rootPath, file);

// include some data

const PATH_TO_SAVE = `${rootPath}`; // `../${GITHUB_REPO}`;
const FILE_TO_SAVE = `${PATH_TO_SAVE}/shields-status.md`;

const GITHUB_REPO = 'js-lib-write-shields';
const GITHUB_USER = 'ymc-github';
const SHIELDS_URL = 'https://img.shields.io';
const TWITTER_USER = 'yemiancheng';
export default {
  GITHUB_REPO,
  GITHUB_USER,
  SHIELDS_URL,
  TWITTER_USER,
  config: {
    GITHUB_CONTRIBUTORS: 'deletes',
    GITHUB_LAST_COMMIT: 'deletes',
    GITHUB_LAST_COMMIT_BRANCH: 'sets',
    GITHUB_RELEASE_DATE: 'deletes',
    GITTER: 'sets',
    GITHUB_LANGUAGE_COUNT: 'sets',
    GITHUB_LANGUAGE_TOP: 'sets',
    TRAVIS_COM_BRANCH: 'sets',
    GITHUB_COMMIT_ACTIVITY: 'sets',
    GITHUB_PACKAGE_VERSION_BRANCH: 'sets',
    GITHUB_FOLLOWERS: 'sets',
    TWITTER_FOLLOWERS: 'sets',
    GITHUB_REPO_SIZE: 'sets'
  },
  order: [
    'GITHUB_COMMIT_ACTIVITY',
    'GITHUB_CONTRIBUTORS',
    'GITHUB_FOLLOWERS',
    'GITHUB_LANGUAGE_COUNT',
    'GITHUB_LANGUAGE_TOP',
    'GITHUB_LAST_COMMIT',
    'GITHUB_LAST_COMMIT_BRANCH',
    'GITHUB_PACKAGE_VERSION_BRANCH',
    'GITHUB_RELEASE_DATE',
    'GITHUB_REPO_SIZE',
    'GITTER',
    'TRAVIS_COM_BRANCH',
    'TWITTER_FOLLOWERS'
  ],
  EOL: '\n',
  PATH_TO_SAVE,
  FILE_TO_SAVE,
  fs,
  utils
};
