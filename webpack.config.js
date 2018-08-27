const { resolve } = require('path');

const target = process.env.TARGET;
const enviroment = process.env.NODE_ENV || 'development';

module.exports = require(resolve(__dirname, 'webpack', `webpack.${target}.${enviroment}`));
