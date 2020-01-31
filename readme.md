# write-shields

## desc

write shields for github repo in readme.md


## how to use for production?
### install

```sh
#npm install write-shields --save-dev
npm install https://github.com/YMC-GitHub/js-lib-write-shields.git --save-dev
```

### config

```js
const PATH_TO_SAVE = `${rootPath}`; 
const FILE_TO_SAVE = `${PATH_TO_SAVE}/shields-status.md`;

const GITHUB_REPO = 'js-lib-write-shields';
const GITHUB_USER = 'ymc-github';
const SHIELDS_URL = 'https://img.shields.io';
const TWITTER_USER = 'yemiancheng';
const config= {
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
}
```
//034629

### usage

```js
import He from 'write-shields'
He.config(config).writeShields().writeToFs()
```

## how to use for developer?

### install

```sh
#get the code
git clone https://github.com/ymc-github/js-lib-dev-with-rollup.git
#get his dep
npm install
```

### usage

```sh
#dev
npm run dev

#build
npm run build

#release
npm run release

#lint
npm run lint
npm run lint:no-fix

#format
npm run beautify

#test
npm run test
npm run test:unit
npm run test:coverage
```


## Author

yemiancheng <ymc.github@gmail.com>

## License

MIT
