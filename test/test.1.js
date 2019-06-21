// let count = 0 
// function func (num, callback) {
//   console.log(num)
//   setTimeout(() => {callback(num)}, 1000)
// }

// func(count, () => {
//   count++
//   func(count, () => {
//     count++
//     func(count, () => {
//       count++
//     })
//   })
// })


// 1s print(0) 1s print(1) 1s print(2)
// let count = 0
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(count), 1000)
// })

// promise
// .then((count) => {
//   console.log(count)
//   count++
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(count), 1000)
//   })
// })
// .then((count) => {
//   console.log(count)
//   count++
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(count), 1000)
//   })
// })
// .then((count) => {
//   console.log(count)
// })