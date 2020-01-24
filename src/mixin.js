// he.config(key,val).writeShields().writeToFs()
import curdConfig from './curd-config';
import writeShields from './write-shields';
import writeToFs from './write-to-fs';
const { get, set, config } = curdConfig;
// console.log(get, set, config)
export default {
  get,
  set,
  config,
  writeShields,
  writeToFs
};
