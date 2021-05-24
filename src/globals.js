const env = {};
const process = {env};

if (typeof window == 'undefined') {
  window = {process}; 
}

if (window.process == null) {
  window.process = process;
}

const buffer = require('buffer');
const util = require('util');
Buffer = buffer.Buffer;
TextDecoder = util.TextDecoder;
TextEncoder = util.TextEncoder;

