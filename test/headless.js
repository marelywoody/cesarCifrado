global.window = global;
global.assert = require('chai').assert;
require('../src/js/cipher');
require('./cipher.spec.js');
