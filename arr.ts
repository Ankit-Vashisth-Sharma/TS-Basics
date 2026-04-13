
var arr = [1,2,3,4,5].reverse()
var y = arr
// console.log(arr)
// console.log(y)

const a = new ArrayBuffer(6)
// console.log(a)

const a8 = new Uint8Array(a)
a8[2] = 76
a8[4] = 45
// console.log(a8)

const a16 = new Uint16Array(6)
a16[1] = 1123
a16[2] = 0x2222
// console.log(a16)
// console.log(a)

function linear_search(haystack:number[],needle:number):boolean{
  for(let i =0;i<haystack.length;i++){
    if(haystack[i]===needle){
      return true
    }
  }
  return false
}

console.log(linear_search([1,2,3,4,5,6],5))
console.log(linear_search([1,2,3,4,6],5))


function binary_search(haystack:number[],needle:number): number{
  haystack.sort((a,b)=>a-b);
  let lo =0;
  let hi = haystack.length-1;
  
  do{
    const mid = Math.floor(lo+(hi-lo)/2);
    const v  = haystack[mid];

    if(v==needle){
      return mid+1
    }
    else if(v>needle){
      hi = mid-1
    }
    else{
      lo = mid+1
    }
  }while(lo<=hi);

  return -1;
} 

console.log(binary_search([12,32,45,234,55,65],55));
console.log(binary_search([1,2,3,4,5,6,7,8,910],8));
console.log(binary_search([1,2,3,4,5,6,7,8,9,10],12));


function two_crystal_balls(breaks:boolean[]):number{
  const jmps = Math.floor(Math.sqrt(breaks.length));

  let i = jmps;
  for(;i<breaks.length;i +=  jmps){
    if(breaks[i]){
      break;
    }
  }
  i -= jmps;
  for(let j=0; j<jmps && i<breaks.length;j++){
    if(breaks[i]){
      return i;
    }
    i++;
  }
  return -1;
}

console.log(two_crystal_balls([false, false, false, false, false,false,false, true, true]))
console.log(two_crystal_balls([false, false, false,false,false, true, true]))
