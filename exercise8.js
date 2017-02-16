// var http = require('http')
// var concat = require('concat-stream')
// var url = process.argv[2]

// http.get(url, function (response) {
//   var tempData = ''
//   var letters = 0
//   response.setEncoding('utf-8')
//   response.on('data', function (data) {
//     letters += data.split('').length
//     tempData += data
//   })
//   response.on('end', function () {
//     console.log(letters + '\n' + tempData)
//   })
//   response.on('error', console.error)
// }).on('error', console.error)

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
