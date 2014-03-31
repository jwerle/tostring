
/**
 * Module dependencies
 */

var through = require('through')

/**
 * Returns a stream that
 * transforms a buffer to
 * a string of a specified
 * type.
 *
 * @api public
 * @param {String} type - [hex, utf8, ascii, binary, base64, ...]
 * @param {Object} opts - optional
 * @return {Stream}
 */

module.exports = to;
function to (type, opts) {
  opts = opts || {};
  return through(function (chunk) {
    this.push(Buffer(chunk).toString(type));
    opts.newline && this.push('\n');
  });
}
