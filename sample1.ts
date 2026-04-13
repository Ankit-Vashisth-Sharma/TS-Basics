// console.log("First Demo")
// console.log("Second One")
// console.log("Third One")

// let a: number = 12
// a = 90

// let b: string = "ABC"
// console.log(a,b)

// let c: number= 12.1
// console.log(c)

// var vs let vs const
// var => function scope
// let and const => block scope
// 1) Scope
// 2) Re-declaration
// 3) Hoisting

function test(){
    if(true){
        var x = 10
        let y = 20
        const z = 30
    }
    console.log(x) // 10
}
test()

var y = 12

var y = 99

console.log(y)

let x = 11 // reassignment allowed

console.log(x)

x = 89  // now this is allowes
console.log(x)

function varScope(){
  if(true){
    var a  = "This is message to print"
    console.log(a)
  }
}
varScope()

function ScopeDiff(){
  if(true){
    var num1 = 10
    const num2= 13
    let num3 = 12.1
    console.log(num1,num2,num3)
  }
console.log(num1)  // access functional
// console.log(num2) //cant access
// console.log(num3) // cant acess

}

ScopeDiff()

var arr = [1,2,3,4,5].reverse()
var y = arr
console.log(arr)
console.log(y)

const a = new ArrayBuffer(6)
console.log(a)

const a8 = new Uint8Array(a)
console.log(a8)

const a16 = new Uint16Array(a)

console.log(a)
