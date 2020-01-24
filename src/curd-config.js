const mixins = {
  set: function(key, val) {
    let hasVal;
    let { options, data } = this;
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
    return this;
  },
  get: function(key) {
    let { options } = this;
    return key in options ? options[key] : null;
  },
  config: function(args = {}) {
    let options = Object.assign({}, this.options, args);
    this.options = options;
    return this;
  }
};
export default mixins;
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
