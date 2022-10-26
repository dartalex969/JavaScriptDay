
//Function object, NFE

//Tasks

//Set and decrease for counter

/*function makeCounter() {

   let count = 0;
 
  function counter() {
    return count++;
  };

  
  counter.set = function(value){
    return count = value;
  };

  counter.decrease = function() {
    return count--;
  };
     

   return counter;
}

let counter = makeCounter();

console.log(counter.set(15));
console.log(counter.decrease());
console.log(counter.decrease());*/


//Sum with an arbitrary amount of brackets

/*function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) );
alert( sum(5)(-1)(2) ); 
alert( sum(6)(-1)(-2)(-3) ); 
alert( sum(0)(1)(2)(3)(4)(5) ); */

/*let sum = new Function ('a','b', 'return a + b');
console.log(sum(10,2));


function func(){
  let a = 5, b = 3;
  return new Function( `alert(${a} + ${b})` )
  }
  func()()*/


  //Scheduling: setTimeout and setInterval

  /*function sayHi(){
    console.log("Hello");
  }
  setTimeout(sayHi, 1000);*/

  /*let timerId = setTimeout(() => console.log("never happens"), 2000);
  console.log(timerId);

  clearTimeout(timerId);
  console.log(timerId);*/

  /*let timerId = setInterval(() => console.log('tick'), 2000);
  setTimeout(() => {clearInterval(timerId); console.log('stop');}, 7000);*/


  //Tasks

  //Output every second

  //using setInterval

  /*function printNumbers(from, to){
    let current = from;

    let timerId = setInterval(function(){
      console.log(current);
      if(current == to){
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  printNumbers(0,15);*/

  
  //using setTimeout

  /*function printNumbers(from, to){
    let current = from;

    let timerId = setTimeout(function show(){
      console.log(current);
      timerId = setTimeout(show,1000);
      if(current == to) clearTimeout(timerId);
      current++;
      
      
    },1000);
    
    
  }
 printNumbers(10,17);*/

//What will setTimeout show?

/*let i = 0;

setTimeout(() => console.log(i),100);// it has displayed 100000000, so which means setTimeout worked
for(let j = 0; j < 100000000; j++){ // after the block of code had finished.

  i++;
}        */                           


    