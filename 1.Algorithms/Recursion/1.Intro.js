
let counter = 0

function inception(){
  console.log(counter)

  //base case
  if(counter > 3){
    return 'done!'
  }

  counter++
  return inception() // must return
}

console.log(inception());

// 1. Identify base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns
