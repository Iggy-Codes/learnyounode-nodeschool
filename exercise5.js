var pathParameter = process.argv[2]
var extension = '.' + process.argv[3]
var fs = require('fs')
var path = require('path')
fs.readdir(pathParameter, function (error, directoryContent) {
  if (error) throw error
  // directoryContent.forEach(function (element) {
  //   if (path.extname(element) === ('.' + extension)) console.log(element)
  // })
  var files = directoryContent.filter(function (element) {
    return (path.extname(element) === (extension))
  })
  return files.join('\n')
})
