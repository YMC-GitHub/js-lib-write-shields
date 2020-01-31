const fs = require('fs');
const path = require('path');
export const mkdirsSync = function _mkdirsSync(dirname) {
  // has dir?
  if (fs.existsSync(dirname)) {
    return true;
  }
  // does not?create dir
  if (_mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
};

export const startWithSmall = x => x.charAt(0).toLowerCase() + x.slice(1);

// exports.camelCase = x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
export const camelCase = str =>
  startWithSmall(
    str
      .split(/[_.-]/)
      .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
  );
export const funcName = camelCase;
export const readyPromise = function() {
  return Promise.resolve();
};
