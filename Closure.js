
//Tasks

// Does a function pickup latest changes?

/*let name = 'John';

function sayHi(){
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); //Pete, as this is the current value of "name" that is taken by the function sayHi.

*/

//Which variable are available?

/*function makeWorker(){
    let name = "Pete";

    return function(){
        console.log(name);
    };
}

let name = "John";

let work = makeWorker();
work(); //It's likely to show "Pete", as the function is going to get a local variable first which is "Pete".*/

//Are counters independent?

/*function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log(counter() );//1
  console.log( counter2() ); // 0
  console.log( counter2() ); // 1 Both variables act the same way.*/


  //Counter object

  /*function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); // 1
  console.log( counter.up() ); // 2
  console.log( counter.down() ); // 1*/

 
  //Function in if

  /*let phrase = "Hello";

  if(true){
    let user = "John";

    function sayHi(){
        console.log(`${phrase}, ${user}`);
    }
  };

  sayHi();*/
  //Hello, John; "phrase" refers to the global phrase "Hello"
  // after it hasn't find it at a local lexical environment.


//Sum with closures

/*function sum(a){

    return function (b){
        return a + b;
    }
    
}

console.log(sum(1)(2));
console.log(sum(4)(-5));
console.log(sum(5)(-1));
*/

//Is variable visible?

/*let x = 1;

function func(){
    console.log(x);

    let x = 2;
}

func(); //it's gonna show a mistake as the local variable inside the function has been initialized after
//having been called by the function.*/

//Filter through function


/*function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

  function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr1 = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr1.filter(inArray([1, 2, 10])) ); // 1,2*/


  //Sort by field

 /* let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
*/
  //по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// function byField(param) {
//     return function (a,b) {
//         if (a[param] < b[param]) {
//             return -1
//         } else if (a[param] > b[param]) {
//             return 1
//         } else {
//             return 0
//         }
//     }
// }
// let arr = users.sort(byField('name'))
// for (let item of arr){
//     console.log(item);
// }
// console.log('---------------------------------');
// arr = users.sort(byField('surname'))
// for (let item of arr){
//     console.log(item);
// }

//Army of functions

/*function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let j = i;
      let shooter = function() { // create a shooter function,
        
        console.log( j ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
    
    // ...and return the array of shooters
    return shooters;
  }
  
  let army = makeArmy();
  
  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.
  army[5]();*/