// const str=`
// 010-1234-5678
// therecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick bown fox jums over the lazy dog.
// aaabbbccccdddd
// `
// let str=`
// 010-1234-5678
// therecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick bown fox jums over the lazy dog.
// aaabbbccccdddd
// d
// hxyp
// 동해물과 백두산이 마르고 닳도록
// `
// // const regexp=new RegExp('the','gi')
// // const regexp=/the/gi
// // console.log(str.match(regexp))

//  const regexp=/fox/gi
// // console.log(regexp.test(str))

// // const regexp=/heropy/gi
// // console.log(str.replace(regexp,'AAA'))
// str=str.replace(regexp,'AAA')
// console.log(str)

// const regexp=/the/gi
// console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gi))

// console.log(str.match(/^t/gim))
// console.log(str.match(/h..p/g))
// console.log(str.match(/dog|fox/g))

// console.log(
//   str.match(/https?/g)
// )
// console.log(
//   str.match(/d{2,3}/g)
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )
//  console.log(
//    str.match(/[가-힣]{1,}/g)
//  
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// console.log(
//   str.match(/\d{1,}/g)
// )
// const h=`  the hello world    !

// `
//  console.log(
//   h.replace(/\s/g,'')
//  )
//----------------------
const str=`
010-1234-5678
therecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick bown fox jums over the lazy dog.
aaabbbccccdddd
`
// console.log(
// str.match(/.{1,}(?=@)/g)
//  )
console.log(
   str.match(/(?<=@).{1,}/g)
    )