//Decorators and forwarding, call/apply



/*function hash() {
  alert( [].join.call(arguments) ); // 1,2
}

hash(1, 2);*/

//Function binding

/*let user = {
  firstName:"John",
  sayHi(){
    console.log(`Hello,${this.firstName}!`);
  }
}
user.sayHi();
user.firstName = 'Archie';
user.sayHi();
let func = user.sayHi.bind(user);
setTimeout(func, 1000);

user = {
  sayHi(){console.log("Another user in setTimeout!");}
};
user.sayHi();*/


//Partial functions

/*function mul(a, b){
  return a * b;
}

let triple = mul.bind(null, 3);
console.log(triple(3));
console.log(triple(4));
console.log(triple(5));*/

//Tasks

//Bound function as a method

/*function f() {
  console.log(this);
}

let user = {
  g: f.bind(null)
};

user.g()//it shows [object Window] referring to the global obj, it should've shown "null" though according to the site.

*/


//Second bind

/*function f() {
  console.log(this.name);
}

f= f.bind({name: "John"}).bind({name:"Ann"});

f();//John*/


//Function property after bind

/*function sayHi(){
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

console.log(bound.test);//undefined, as bound doesn't have the test property.
bound();
console.log(bound);
console.log(sayHi.test);*/


//Fix a function that loses 'this'

/*function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));*/


//Partial application for login

/*function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true ),user.login.bind(user, false));*/ 


//Property flags and descriptors

/*let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));*/


/*let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));

console.log(user);*/

//Non-writable

/*let user = {
  name:'John'
};

Object.defineProperty(user, "name", {
  writable:false
});
user.name = "Pete";
console.log(user.name);//John*/


//Property getters and setters

/*let user = {
  name: "John",
  surname: "Smith",
  get fullName(){
    return `${this.name} ${this.surname}`;
  }
}

console.log(user.fullName);*/

/*let user = {
  name: "John",
  surname: "Smith",

  get fullName(){
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

user.fullName = "Alice Cooper";

console.log(user.name);
console.log(user.surname);
console.log(user);*/

