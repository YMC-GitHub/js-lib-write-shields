/**
 * write-shields v1.0.0
 * (c) 2018-2020 yemiancheng <ymc.github@gmail.com>
 * @license MIT
 */
'use strict';

function githubCommitActivity(ref) {
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub commit activity';
  var prefix = '/github/commit-activity/m';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubRepoSize(ref) {
  var label = ref.label; if ( label === void 0 ) label = 'github%20repo%20size';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub repo size';
  var prefix = '/github/repo-size';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}
function githubPackageVersionBranch(ref) {
  var branch = ref.branch; if ( branch === void 0 ) branch = 'master';
  var label = ref.label; if ( label === void 0 ) label = 'github%20package.json%20version%40master';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub package.json version (branch)';
  var prefix = '/github/package-json/v';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + "/" + branch + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function travisComBranch(ref) {
  var branch = ref.branch; if ( branch === void 0 ) branch = 'master';
  var label = ref.label; if ( label === void 0 ) label = 'Travis%20CI';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Travis%20CI';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'Travis (.com) branch';
  var prefix = '/travis/com';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + "/" + branch + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubFollowers(ref) {
  var label = ref.label; if ( label === void 0 ) label = 'github%20followers';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub followers';
  var prefix = '/github/followers';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function twitterFollowers(ref) {
  var label = ref.label; if ( label === void 0 ) label = "follow%20%40";
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Twitter';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'Twitter Follow';
  var prefix = '/twitter/follow';
  var reslut = "" + SHIELDS_URL + prefix + "/" + TWITTER_USER + ".svg?label=" + label + TWITTER_USER + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubContributors(ref) {
  var label = ref.label; if ( label === void 0 ) label = 'github%20contributors';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub contributors';
  var prefix = '/github/contributors-anon';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubLastCommit(ref) {
  var label = ref.label; if ( label === void 0 ) label = 'github%20last%20commit%40master';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub last commit';
  var prefix = '/github/last-commit';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubLastCommitBranch(ref) {
  var branch = ref.branch; if ( branch === void 0 ) branch = 'master';
  var label = ref.label; if ( label === void 0 ) label = 'github%20last%20commit%40master';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub last commit (branch)';
  var prefix = '/github/last-commit';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + "/" + branch + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubReleaseDate(ref) {
  var label = ref.label; if ( label === void 0 ) label = 'github%20release%20date';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub release date';
  var prefix = '/github/release-date';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function gitter(ref) {
  var label = ref.label; if ( label === void 0 ) label = 'chat';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'Gitter';
  var prefix = '/gitter/room';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubLanguageCount(ref) {
  var label = ref.label; if ( label === void 0 ) label = 'languages';
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub language count';
  var prefix = '/github/languages/count';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?label=" + label + "&color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

function githubLanguageTop(ref) {
  var color = ref.color; if ( color === void 0 ) color = 'ff69b4';
  var logo = ref.logo; if ( logo === void 0 ) logo = 'Github';
  var logoColor = ref.logoColor; if ( logoColor === void 0 ) logoColor = 'ff69b4';
  var style = ref.style; if ( style === void 0 ) style = 'popout-square';

  var ref$1 = this.options;
  var GITHUB_REPO = ref$1.GITHUB_REPO;
  var GITHUB_USER = ref$1.GITHUB_USER;
  var SHIELDS_URL = ref$1.SHIELDS_URL;
  var TWITTER_USER = ref$1.TWITTER_USER;
  var name = 'GitHub language top';
  var prefix = '/github/languages/top';
  var reslut = "" + SHIELDS_URL + prefix + "/" + GITHUB_USER + "/" + GITHUB_REPO + ".svg?color=" + color + "&logo=" + logo + "&logoColor=" + logoColor + "&style=" + style;
  return ("![" + name + "](" + reslut + ")");
}

var funcs = {
  githubCommitActivity: githubCommitActivity,
  githubRepoSize: githubRepoSize,
  githubPackageVersionBranch: githubPackageVersionBranch,
  travisComBranch: travisComBranch,
  githubFollowers: githubFollowers,
  twitterFollowers: twitterFollowers,
  githubContributors: githubContributors,
  githubLastCommit: githubLastCommit,
  githubLastCommitBranch: githubLastCommitBranch,
  githubReleaseDate: githubReleaseDate,
  gitter: gitter,
  githubLanguageCount: githubLanguageCount,
  githubLanguageTop: githubLanguageTop,
};

//console.log(Object.keys(funcs).sort())
var Feat = function Feat(opts, data) {
  this.options = opts || {};
  this.data = data || {};
  this.init();
};
Feat.prototype.init = function init () {
  var ref = this.options;
    var GITHUB_REPO = ref.GITHUB_REPO;
    var GITHUB_USER = ref.GITHUB_USER;
    var SHIELDS_URL = ref.SHIELDS_URL;
    var TWITTER_USER = ref.TWITTER_USER;
  if (!GITHUB_REPO) { this.options.GITHUB_REPO = 'js-lib-write-shields'; }
  if (!GITHUB_USER) { this.options.GITHUB_USER = 'ymc-github'; }
  if (!SHIELDS_URL) { this.options.SHIELDS_URL = 'https://img.shields.io'; }
  if (!TWITTER_USER) { this.options.TWITTER_USER = 'yemiancheng'; }
  return this
};
//register methord to class Feat
Object.keys(funcs).sort().forEach(function (element) {
  Feat.prototype[element] = funcs[element];
});

//export Feat as default from './feat.class'

var mixins = {
  set: function (key, val) {
    var hasVal;
    var ref = this;
    var options = ref.options;
    if (val || val === '' || val === 0 || val === false) {
      hasVal = true;
    } else {
      hasVal = false;
    }
    // set when (key,val)
    if (key && hasVal) {
      if (key in options) {
        data[key] = val;
      }
    }
    return this
  },
  get: function () {
    var ref = this;
    var options = ref.options;
    return key in options ? options[key] : null
  },
  config: function (args) {
    if ( args === void 0 ) args = {};

    var options = Object.assign({}, this.options, args);
    this.options = options;
    return this
  }
};
/*
class Config {
  init() {
    const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options
    if (!GITHUB_REPO) this.options.GITHUB_REPO = 'js-lib-write-shields'
    if (!GITHUB_USER) this.options.GITHUB_USER = 'ymc-github'
    if (!SHIELDS_URL) this.options.SHIELDS_URL = 'https://img.shields.io'
    if (!TWITTER_USER) this.options.TWITTER_USER = 'yemiancheng'
    return this
  }
}
Object.keys(mixins).sort().forEach(element => {
  Config.prototype[element] = mixins[element]
})
module.exports = Config
*/

//he.config(key,val).writeShields().writeToFs()
var writeShields = function () {
  var result = '';
  var he = this;
  var ref = he.options;
  var utils = ref.utils;
  var order = ref.order;
  var EOL = ref.EOL;
  var config = ref.config;

  for (var index = 0; index < order.length; index++) {
    var element = order[index];
    var name = utils.camelCase(element);
    if (config[element] === 'sets') { result += "" + EOL + (he[name]({})); }
  }
  he.data.result = result;
  return this
};

//he.config(key,val).writeShields().writeToFs()
var writeToFs = function (opts) {
  var ref = this.options;
  var utils = ref.utils;
  var fs = ref.fs;
  var PATH_TO_SAVE = ref.PATH_TO_SAVE;
  var FILE_TO_SAVE = ref.FILE_TO_SAVE;
  var ref$1 = this.data;
  var reslut = ref$1.reslut;

  utils.mkdirsSync(PATH_TO_SAVE);
  fs.writeFileSync(FILE_TO_SAVE, reslut, 'utf-8');
};

//he.config(key,val).writeShields().writeToFs()
var get = mixins.get;
var set = mixins.set;
var config = mixins.config;
//console.log(get, set, config)
var mixin = {
  get: get,
  set: set,
  config: config,
  writeShields: writeShields,
  writeToFs: writeToFs
};

var makeClassSugar = function (Feat) {
  //create an instance
  var feat = new Feat();
  //create an instance without new keyword
  feat.feat = function (opts, config) {
    return new Feat()
  };
  //bind Class to property
  feat.Feat = Feat;
  return feat
};

//console.log(mixin)
Object.keys(mixin).sort().forEach(function (element) {
  Feat.prototype[element] = mixin[element];
});
var pro = makeClassSugar(Feat);

//include some lib
var fs = require('fs');
var path = require('path');
var utils = require('./utils');

var rootPath = path.resolve(__dirname, '..');

//include some data

var PATH_TO_SAVE = "" + rootPath;//`../${GITHUB_REPO}`;
var FILE_TO_SAVE = PATH_TO_SAVE + "/shields-status.md";

var GITHUB_REPO = 'js-lib-write-shields';
var GITHUB_USER = 'ymc-github';
var SHIELDS_URL = 'https://img.shields.io';
var TWITTER_USER = 'yemiancheng';
var options = {
  GITHUB_REPO: GITHUB_REPO,
  GITHUB_USER: GITHUB_USER,
  SHIELDS_URL: SHIELDS_URL,
  TWITTER_USER: TWITTER_USER,
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
    GITHUB_REPO_SIZE: 'sets',
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
  PATH_TO_SAVE: PATH_TO_SAVE,
  FILE_TO_SAVE: FILE_TO_SAVE,
  fs: fs,
  utils: utils
};

//simple usage
//engine.config(options).writeShields().writeToFs()
//console.log(engine)
pro.config(options);

module.exports = pro;
