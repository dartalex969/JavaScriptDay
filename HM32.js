


    
  //Factory function
  
 /* function hello(name) {
    
    return {
        
        sayHello: function() {
            console.log(`Hello, ${name}`)
        }
    }
     
    
  }
  let me = hello('Aziz');
  me.sayHello();

  console.log('--------------------');
  

  //Constructor function
  
  function Person(name){
    this.name = name;
    this.sayHello =  function() {
      return `Hello, ${this.name}!`;
    }
  }
  let person = new Person('Aziz');
  let person2 = new Person ('Nicole');

  console.log(person.sayHello());
  console.log(person2.sayHello());

  console.log('-------------------')
  

  //Class

  class Person2{
    constructor(name){
      this.name = name;
      this.sayMyName = function() {
        return `Hi,${this.name}`
      }
    }
    get sayHello(){
      return `Hello, ${this.name}!`
    }
  }
  
  let personOfClass = new Person2('Jinger');
  console.log(personOfClass.sayHello);
  console.log(personOfClass.sayMyName());
  
  console.log(personOfClass);
  console.log(person);*/


  //Homework

  //the task one

  /*class Circle{
    constructor(radius){
      this.radius = radius;
    }

    get circleRadius(){
      return this.radius;
    }

    set valueOfRadius(value){
      this.radius = value;
    }

    get circleDiameter(){
      return `The diameter of the circle is ${2*this.radius}.`;
    }

    area(){
      return `The area of the circle is ${Math.floor(Math.PI * this.radius**2)}.`;
    }

    circumference(){
      return `The circumference of the cicrcle is ${Math.floor(Math.PI * 2*this.radius)}.`;
    }

  }

  const circle = new Circle(5);
  console.log(circle.circleRadius);
  circle.valueOfRadius = 10;
  console.log(circle.circleRadius);
  console.log(circle.circleDiameter);
  console.log(circle.area());
  console.log(circle.circumference());*/

  //the second task

  /*class HtmlElement {
    constructor(tagName,closed){
      this.tagName = tagName;
      this.closed = closed;
    }

    textContent = ''

    _styles = []
    get styles(){
      let tmp = '';
      for (let style of this._styles) {
        tmp += `${style[0]}: ${style[1]};`
      }
      return tmp;
    }

    set styles (value) {
      for (let attr of this._attrs){
        if(attr.includes('style')) {
          this._attrs.splice(this._attrs.indexOf(attr), 1)
          break
        }
      }
      this._styles.push(...value);
      this._attrs.push(['style', this.styles]);
    }

    _attrs = []

    get attrs() {
      let tmp = '';
      for (let arr of this._attrs){
        tmp += `${arr[0]} = '${arr[1]}'`
      }
      return tmp;
    }

    set attrs(value) {
      this._attrs.push(...value);
    }

    insideTags = []
    addStart(element) {
      this.insideTags.push([element,'start'])
    }

    addEnd(element) {
      this.insideTags.push([element, 'end'])
    }

    getHtml() {
      let result = `<${this.tagName} ${this.attrs}>`
      for(let element of this.insideTags) {
        if (element.includes('start')) {
          result += element[0].getHtml()
        }
      }
      result += this.textContent
      for(let element of this.insideTags) {
        if (element.includes('end')) {
          result += element[0].getHtml()
        }
      }
      if (this.closed) {
        result += `</${this.tagName}>`
      }
      return result
    }

  }
  
  let div = new HtmlElement('div', true)
  div.textContent = 'Hello!'
  div.styles = [['background', 'blue'], ['width','100px'], ['height', '100px'], ['color', 'green']]

  let p1 = new HtmlElement('p', true)
  p1.textContent = 'I AM P1'
  p1.styles = [['color', 'white']]

  let div2 = new HtmlElement('div', true)
  div2.textContent = 'I AM DIV2'
  div2.styles = [['background', 'red'], ['width', '100px'], ['height', '50px']]

  let p2 = new HtmlElement('p', true)
  p2.textContent = 'I AM P2'
  p2.styles = [['color', 'white']]


  div2.addEnd(p2)

  div.addStart(div2)
  div.addEnd(p1)
  document.write(div.getHtml())

// '<div style='styles'>Hello!</div>'
// '<{tagName} {attrs}> 
// this.insideTags[i].getHtml()  if 'START'
// {textContent} 
// this.insideTags[i].getHtml()  if 'END'
// ?{closed}</{tagName}>'*/

//the third task

class CssClass {
  constructor(name){
    this.name = name;
  }

  _styles = []
  get styles(){
    return this._styles;
    
    }

    set styles (value){
      this._styles.push(...value);

    }

    removeStyle(start,count){
      this._styles.splice(start,count)

    }
  
    getCss(){

      let arr = [];
      for (let styles of this._styles){
           arr.push(styles.join(':'));
      }
      return arr.join();
      
    } 

    
  }
   

let div = new CssClass('div');
div.styles = [['background', 'blue'], ['width','100px'], ['height', '100px'], ['color', 'green']];

console.log(div._styles);
console.log(div);
div.removeStyle(1,1);
console.log(div.styles);
console.log(div.getCss());