import Feat from './feat/index';
import mixin from './mixin';
import makeSugar from './class-sugar';

// console.log(mixin)
Object.keys(mixin)
  .sort()
  .forEach(element => {
    Feat.prototype[element] = mixin[element];
  });
const pro = makeSugar(Feat);
export default pro;
