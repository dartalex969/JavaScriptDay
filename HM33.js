

//the task one

/*class Marker{

    color='color';
    ink = 'value';

    constructor(color,ink){
        this.color = color;
        this.ink = ink;

    }

    print(text){
        
        let noWhitespace = text.replaceAll(' ','');
        let symbolsToPrint = Math.floor(+this.ink/0.5);
        let newTextEmpty = 0;

        for(let empty of text){
          if(empty == ' '){
            newTextEmpty += 1;
          }
        }
        //console.log(newTextEmpty);
                       
        for(let i = 1; i <= noWhitespace.length; i++){

          this.ink = this.ink - 0.5;
          if(noWhitespace.length > 200 || noWhitespace.length > symbolsToPrint){
            this.ink = 0;
          }
        
          
        }
           function printTo(){
            let newText = '';

            for(let current = 0; current < (symbolsToPrint + newTextEmpty); current++){
              if(current === (symbolsToPrint + newTextEmpty)){break;}
                            
                newText += `${text[current]}`; 
                
               
                
                              
              
            }
            
            

            document.write(`<p>${newText}</p>
         <style>p{display:inline-block;margin:0;font-family:verdana;color:blue}</style>`);
         console.log(`There are overall ${newText.length} symbols including ${newTextEmpty} whitespace
         characters on the display now.`);

         function notEnoughInk() {
          if(noWhitespace.length > 200 || noWhitespace.length > symbolsToPrint){
            alert(`There is not enough ink to print. Please, fill up the ink tank!`);
         
          }
        }
        setTimeout(notEnoughInk, 1000);
        

           }
           printTo();
                                        
          
        console.log(noWhitespace);
        console.log(`The text sent to be printed includes overall ${text.length} symbols including whitspace.`);
        console.log(`There are ${noWhitespace.length} symbols apart from whitespace in the text.`);                
        console.log(`There is ${(this.ink)}% of the ink left in the ink tank.`);
        console.log(`${symbolsToPrint} symbol(s) can be printed on this amount of ink.`);                
            
        } 
        
        
        
    }


 let marker = new Marker('blue',50);
 /*marker.print(`Hello, how are you doing today?
 How are things? What are your plans for the weekend? When it comes
 to my weekends, sometimes I like to goof around. However, I might 
 take my kids to a park every once in while. Anyway, be it
 as it may, I try to be s`);*/
 /*console.log(marker);


 class Charge extends Marker {
    constructor(color, ink, name){
      super(color,ink);
      this.name = name;
    }
      
    
  chargeMarker(){
    console.log(`The ink tank of this ${this.name} marker has been charged to ${this.ink}%.`);
    
    }
 }
 let charge = new Charge('blue',50, 'NEW');
 console.log(charge);
 charge.chargeMarker();
 charge.print(`Hello, how are you doing today?
 How are things? What are your plans for the weekend? When it comes
 to my weekends, sometimes I like to goof around. However, I might 
 take my kids to a park every once in while. Anyway, be it
 as it may, I try to be s`);
*/


//the second task

/*class Today{
  constructor(){
    this.now = new Date();
  }

  showTime(){
    return this.now;
  }
  
}
let today = new Today();
console.log(today.showTime());
console.log(today);


class ExtendedDate extends Today{
  
  constructor(...args){
    super(...args)
    this.currentTimestamp = Date.now();
    this.thisDay = `${this.now.getFullYear()}-${this.now.getMonth()+1}-${this.now.getDate()}`;
  }



  showCurrentDate(){
    return `Today is ${this.now.getDate()}.${this.now.getMonth()+1}.${this.now.getFullYear()}`;
  }

  checkDate(date){
    
   
    if(new Date(Date.parse(date)) > new Date(this.currentTimestamp)) return true;
    if(date === this.thisDay)return true;
    else return false;

  }
  checkLeapYear(year){
    const leap = new Date(year, 1, 29).getDate() === 29;
    if(leap){
      console.log(year + ' is a leap year.');
    }
    else {
      console.log(`${year} is not a leap year.`);
    }

  }

  nextDay(year, month, day){
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    return date;

  }

}
let extendedDate = new ExtendedDate();
console.log(extendedDate);
console.log(extendedDate.showTime());
console.log(extendedDate.showCurrentDate());
console.log(extendedDate.checkDate('2022-12-25'));
console.log(extendedDate.checkDate('2022-11-14'));
console.log(extendedDate.checkDate('2022-09-10'));
extendedDate.checkLeapYear(2020);
extendedDate.checkLeapYear(2022);
console.log(extendedDate.nextDay(2022,11,25));*/

//the third task

class Employee{

  constructor(name, age, position){
    this.name = name;
    this.age = age;
    this.position = position;
    this.list = ['Alice','Paul','Ronny'];
    
  }


  showList(...employee){
     return this.list.push(...employee);
  }

}
let employee1 = new Employee('Alice', 37, 'clerk');
let employee2 = new Employee('Paul',34,'credit analyst');
employee1.showList();
console.log(employee1);
console.log(employee2);

class EmpTable extends Employee{

  constructor(name, age, position){
    super(name,age, position);
  }

  getHtml(){

    document.write(`<table>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                      </tr>
                      <tr>
                        <td>${this.name}</td>
                        <td>${this.age}</td>
                        <td>${this.position}</td>
                      </tr>
                      <tr>
                        <td>${this.list[0]}</td>
                        <td>${employee1.age}</td>
                        <td>${employee1.position}</td>
                      </tr>
                      <tr>
                        <td>${this.list[1]}</td>
                        <td>${employee2.age}</td>
                        <td>${employee2.position}</td>
                      </tr>
                    </table><style>table{margin:0px auto;width:200px;border-collapse: collapse;}
                    td,th{border:1px solid black;padding:8px;}</style>`);
                    
    
    
  }

}
let table = new EmpTable('Nicolas',28,'financier');
console.log(table);
//table.getHtml();


class StyleEmpTable extends EmpTable{

  getStyles(backgroundColor,color,fontFamily,fontColor){
    

    super.getHtml(document.write(`<style>th{background-color:${backgroundColor};color:${color}}
    tr{font-family:${fontFamily};color:${fontColor}</style>`));
    
    //return this.getHtml();

  }


}
let style = new StyleEmpTable('Ronny',27,'mortgage consultant');
console.log(style);
style.getStyles('#04AA6D','yellow','verdana','#9932CC');










 



 