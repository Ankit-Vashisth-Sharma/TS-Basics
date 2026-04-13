
var arr = [1,2,3,4,5].reverse()
var y = arr
console.log(arr)
console.log(y)

const a = new ArrayBuffer(6)
console.log(a)

const a8 = new Uint8Array(a)
a8[2] = 76
a8[4] = 45
console.log(a8)

const a16 = new Uint16Array(6)
a16[1] = 1123
a16[2] = 0x2222
console.log(a16)
console.log(a)
