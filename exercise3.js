var fileName = process.argv[2]
var fs = require('fs')
console.log(fs.readFileSync(fileName, 'utf-8').split('\n').length - 1)
