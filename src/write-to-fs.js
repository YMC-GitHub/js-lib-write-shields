// he.config(key,val).writeShields().writeToFs()
const writeToFs = function(opts) {
  let { utils, fs, PATH_TO_SAVE, FILE_TO_SAVE } = this.options;
  let { reslut } = this.data;

  utils.mkdirsSync(PATH_TO_SAVE);
  fs.writeFileSync(FILE_TO_SAVE, reslut, 'utf-8');
};
export default writeToFs;
