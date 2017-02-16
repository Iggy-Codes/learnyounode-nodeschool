var pathParameter = process.argv[2]
var extension = process.argv[3]

var exercise6Module = require('./exercise6-module.js')

exercise6Module(pathParameter, extension, callback)

function callback (err, data) {
  if (err) throw err
  console.log(data.join('\n'))
}

