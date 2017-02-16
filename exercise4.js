var fileName = process.argv[2]
var fs = require('fs')
fs.readFile(fileName, 'utf-8', function (error, fileData) {
  if (error) throw error
  console.log(fileData.split('\n').length - 1)
})
