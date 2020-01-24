/* eslint-env node */
// include some lib
import engine from './engine';

// include some data
import options from './config';

// simple usage
// engine.config(options).writeShields().writeToFs()
// console.log(engine)
engine.config(options);

export default engine;
