// he.config(key,val).writeShields().writeToFs()
const writeShields = function() {
  let result = '';
  // eslint-disable-next-line consistent-this
  let he = this;
  let { utils, order, EOL, config } = he.options;

  for (let index = 0; index < order.length; index++) {
    const element = order[index];
    const name = utils.camelCase(element);
    if (config[element] === 'sets') result += `${EOL}${he[name]({})}`;
  }
  he.data.result = result;
  return this;
};
export default writeShields;
