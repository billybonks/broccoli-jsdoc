var Plugin = require('broccoli-plugin');
var path = require('path');
BroccoliJsdoc.prototype = Object.create(Plugin.prototype);
BroccoliJsdoc.prototype.constructor = BroccoliJsdoc;

function BroccoliJsdoc(inputNodes, options) {
  options = options || {};
  Plugin.call(this, inputNodes);
  this.options = options;
}

BroccoliJsdoc.prototype.build = function() {
  let cmd = require.resolve('jsdoc/jsdoc.js');
  let exec = require( 'child_process' ).exec;
  exec( cmd + ' -c jsdoc.json', { cwd: process.cwd() }, function( error, stdout, stderr ) {
    console.log(error);
  });
  // // Read files from this.inputPaths, and write files to this.outputPath.
  // // Silly example:
  //
  // // Read 'foo.txt' from the third input node
  // var inputBuffer = fs.readFileSync(path.join(this.inputPaths[2], 'foo.txt'));
  // var outputBuffer = someCompiler(inputBuffer);
  // // Write to 'bar.txt' in this node's output
  // fs.writeFileSync(path.join(this.outputPath, 'bar.txt'), outputBuffer);
};
