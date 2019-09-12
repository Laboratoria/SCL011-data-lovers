global.window = global;
global.assert = require('chai').assert;
//require('../src/data/rickandmorty.js')
require('../src/data');
require('./data.spec.js');