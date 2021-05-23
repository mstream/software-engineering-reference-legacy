if (window.process == null) {
  process = {
    env: {}
  }
}

const buffer = require("buffer")
const util = require("util")
Buffer = buffer.Buffer;
TextDecoder = util.TextDecoder;
TextEncoder = util.TextEncoder;

