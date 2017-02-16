// First version
// var args = process.argv
// var total = 0
// for (var i = 2; i < args.length; i++) {
//   total += Number(args[i])
// }
// console.log(total)

console.log(process.argv.slice(2).reduce(function (acc, item) {
  return acc + Number(item)
}, 0))
