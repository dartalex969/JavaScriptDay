/*let user = {
    name:"John",
    age: 30
};
 console.log(Object.keys(user));
 console.log(Object.values(user));
 console.log(Object.entries(user));
*/

//Objects.keys, values, entries

//Tasks

//Sum the properties

/*let salaries = {
    "John": 4500,
    "Pete": 5600,
    "Mary": 5000,
};

function sumSalaries(salaries){

    let total = 0;
    let salaryList = Object.values(salaries);

    for(let value of salaryList){
         total += value;
    }
    return total;
}
console.log(sumSalaries(salaries));*/



//Count properties

/*let user = {
    name: "John",
    age: 30,
    location: "New York city",
    marital_status: 'married',
    occupation: 'engineer',
    

};

let count = function(user){
    return Object.entries(user).length;
};
console.log(count(user));*/



//Destructuring assignment

/*let arr = ["John","Smith"];
console.log(arr[0]);
console.log(arr[1]);
let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);*/

//Tasks

//Destructuring assignment

/*let user = {
    name: "John",
    years: 30
};


let {name, years:age,isAdmin=false} = user;
let keys = Object.keys(user);



console.log(name);
console.log(age);
console.log(isAdmin);
console.log(keys.includes(isAdmin));*/


//The maximal salary

/*let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    let salaryList = Object.entries(salaries);
    let maxSalary = 0;
    let maxName = null;

    for(let [name,salary]of salaryList){
        if(maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
};
console.log(topSalary(salaries));*/


//Date and Time

/*let date = new Date ('2017-01-26');
console.log(date.getTime());*/

//Tasks

//Create a date

/*let date = new Date(2012,1,20,3,12);
console.log(date);*/

//Show a weekday

/*let date = new Date(2015,0,15);

let getWeekDay = function(date){
    if(date.getDay() == 0) return 'SU';
    else if(date.getDay() == 1) return 'MO';
    else if(date.getDay() == 2) return 'TU';
    else if(date.getDay() == 3) return 'WE';
    else if(date.getDay() == 4) return 'TH';
    else if(date.getDay() == 5) return 'FR';
    else if(date.getDay() == 6) return 'SA';
    
}
console.log(getWeekDay(date));*/

//European weekday

/*let date = new Date(2012,0,3);

let getLocalDay = function(date){

    if(date.getDay() == 0) {
        date.getDay() = 7;
        }
   
        return date.getDay();
}
console.log(getLocalDay(date));*/


//Which day of month was many days ago?

/*let date = new Date(2015,0,2);

function getDateAgo(date,days){
   let date1 = date.setDate(date.getDate()-days);
   let newDate = new Date(date1);
   return newDate.getDate();
}
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
*/

//Last day of month?

/*function getLastDayOfMonth(year, month){
    let date = new Date (year, month + 1);
    let date1 = date.setDate(date.getDate() - 1);
    let lastDay = new Date(date1);
    return lastDay.getDate();
}
console.log(getLastDayOfMonth(2012,1));
console.log(getLastDayOfMonth(2012,3));
*/

//How many seconds have passed today?

/*let getSecondsToday = function(){
    let date = new Date();
    let todayMidnight = new Date(date.setHours(0,0,0,0));
    let start = Date.now();
    let seconds = Math.floor((start - (+todayMidnight))/1000);
    
    return `${seconds} seconds have passed since the beginning of the day.`
}
console.log(getSecondsToday());*/

//How many seconds till tomorrow?

/*function getSecondsToTomorrow(){
    let date = new Date();
    let date1 = date.setDate(date.getDate() + 1);
    let tomorrow = new Date(date1);
    let startOfTomorrow = tomorrow.setHours(0,0,0,0);
    let secondsLeft = Math.floor((startOfTomorrow - Date.now())/1000);

    return `${secondsLeft} seconds left until tomorrow.`;
}
console.log(getSecondsToTomorrow());*/

//Format the relative date

/*let formatDate = function(date){
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}
console.log( formatDate(new Date(new Date - 1)) ); 
console.log( formatDate(new Date(new Date - 30 * 1000)) ); 
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
*/

//JSON methods and, toJSON

//Turn the object into JSON and back

/*let user = {
    name: "John Smith",
    age: 35
};

let userInToJason = JSON.stringify(user);
console.log(userInToJason);

let backToUser = JSON.parse(userInToJason);
console.log(backToUser);*/

//Exclude backreferences

/*let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    
    return (key != "" && value == meetup) ? undefined: value;

}));*/

//Advanced working with functions

//Recursion and stack

//Tasks

//Sum all numbers till the given one

//1.using a loop

/*function sumTo(n){
    let total = 0;
    for(let i = 0; i <= n; i++){
        total += i;
    
    }
    return total;

}
console.log(sumTo(100));*/

//2.using a recursion

/*function sumTo(n){
    if(n == 1 || n == 0){
        return n;
    }
    else if(n > 1) {
        return n + sumTo(n - 1);
    }
    else if(n < 0) {
        return n + sumTo(n + 1);
    }
}
console.log(sumTo(10000));*/



//3. using arithmetic progression

/*let sumTo = function(n){

    return n*(1 + n)/2;
    
};
console.log(sumTo(100000));*/

//P.S. I have no idea which approach is the quickest or slowest, but the last one seems to be the shortest one.
//P.S.S No, we can't. It spits out a mistake. 

//Calculated factorial 

/*function factorial(n){
    if(n==1){
        return n;
    }
    else{
        return n * factorial(n-1);
    }
};
console.log(factorial(4));*/


//Fibonacci numbers

/*function fib(n){
    if(n == 0) return 0;
    else if(n == 1 || n == 2 ){
        return 1;
    }
    else if ( n > 2){
        
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(30));*/

//If 77 is put in, the page really hangs up and works way too slow.


//Output a single-linked list

let list = {
    value: 1,
    next: {
        value:2,
        next: {
            value:3,
            next: {
                value:4,
                next:null
            }
        }
    }
};

//using a loop;

/*function printList(list){
    for(let i = list; i; i = i.next){
        console.log(i.value);
        console.log(i.next);
    }
}
printList(list);*/

//using a recursion

/*function printList(list){
     
    console.log(list.value);
    console.log(list.next);
      

    if(list.next){
        
        return printList(list.next);

    }
    
}
printList(list);*/


//Output a single-linked list in the reverse order

// a loop version

/*function printList(list){
    let arr = [];
    let arr1 = [];
    for(let i = list; i; i = i.next){
        arr.push(i.value);
        arr1.push(i.next);
    }
    
    for(let i = arr.length -1;i>=0; i--){
        console.log(arr[i]);
        console.log(arr1[i]);
    }
    
}
printList(list);*/


//a recursion version

/*function printList(list){
     
    

    if(list.next){
        
       printList(list.next);

    }
    console.log(list.value);
    console.log(list.next);
      
    
}
printList(list);*/
