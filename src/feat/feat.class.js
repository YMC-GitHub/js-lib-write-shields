import funcs from './feat.func.js';
// console.log(Object.keys(funcs).sort())
class Feat {
  constructor(opts, data) {
    this.options = opts || {};
    this.data = data || {};
    this.init();
  }
  init() {
    const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
    if (!GITHUB_REPO) this.options.GITHUB_REPO = 'js-lib-write-shields';
    if (!GITHUB_USER) this.options.GITHUB_USER = 'ymc-github';
    if (!SHIELDS_URL) this.options.SHIELDS_URL = 'https://img.shields.io';
    if (!TWITTER_USER) this.options.TWITTER_USER = 'yemiancheng';
    return this;
  }
}
// register methord to class Feat
Object.keys(funcs)
  .sort()
  .forEach(element => {
    Feat.prototype[element] = funcs[element];
  });
export default Feat;
