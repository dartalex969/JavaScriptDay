

//the task one

class Marker{

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
 console.log(marker);


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

 



 