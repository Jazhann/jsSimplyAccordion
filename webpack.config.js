const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/accordion.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'accordion.js',
    library: "jsAccordion",
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};