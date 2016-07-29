#!/usr/bin/env node
var fs = require('fs')
fs.readFile(process.argv[0], function(err, data) {
  process.stdout.write(new Buffer(data).toString('base64'))
})
