  var fs = require('fs')
  var path = require('path')

  module.exports = function (pathParameter, extension, callback) {
    fs.readdir(pathParameter, function (err, fileNames) {
      if (err) return callback(err)
      fileNames = fileNames.filter(function (file) {
        return path.extname(file) === '.' + extension
      })
      callback(null, fileNames)
    })
  }
