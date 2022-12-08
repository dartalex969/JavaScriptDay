
document.body.style.height = "2000px";

//The task one


function checkDigits(code) {
  return (code >= 'KeyA' && code <= 'KeyZ') ||
    ['ArrowLeft','ArrowRight','Delete','Backspace','Space'].includes(code);
}
checkDigits();


//The second task


let div = document.createElement('div');
div.id = 'modal';
div.innerHTML = '<h3>Hello from Modal Window!<h3>';
document.body.append(div);
modal.hidden = true;
let newBtn = document.createElement('button');
newBtn.id = "close";
newBtn.innerText = "Close";
div.append(newBtn);



document.getElementById('close').onclick = function(){
  let hide = document.getElementById('modal');
  hide.style.display = 'none';
}


function display(){
  let show = document.getElementById('modal');
  
    show.style.display = 'block';
    show.style.position = 'relative';
    show.style.top = '-800px';
  
}


//the third task
//the source:https://javascript.info/introduction-browser-events

football_pitch.onclick = function(event) {

  // window-relative football_pitch coordinates
  let football_pitchCoords = this.getBoundingClientRect();

  // the ball has position:absolute, the football_pitch: position:relative
  // so ball coordinates are relative to the football_pitch inner left-upper corner
  let ballCoords = {
    top: event.clientY - football_pitchCoords.top - football_pitch.clientTop - ball.clientHeight / 2,
    left: event.clientX - football_pitchCoords.left - football_pitch.clientLeft - ball.clientWidth / 2
  };

  // prevent crossing the top football_pitch boundary
  if (ballCoords.top < 0) ballCoords.top = 0;

  // prevent crossing the left football_pitch boundary
  if (ballCoords.left < 0) ballCoords.left = 0;


  // // prevent crossing the right football_pitch boundary
  if (ballCoords.left + ball.clientWidth > football_pitch.clientWidth) {
    ballCoords.left = football_pitch.clientWidth - ball.clientWidth;
  }

  // prevent crossing the bottom football_pitch boundary
  if (ballCoords.top + ball.clientHeight > football_pitch.clientHeight) {
    ballCoords.top = football_pitch.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}


//the fourth task

let div3 = document.createElement('div');
div3.id = 'traffic_light';
document.body.append(div3);
traffic_light.style.cssText = `
 position: relative;
 top: 400px;
 left: 100px;
 width: 270px;
 height: 100px;
 border: 2px solid grey;
 border-radius: 10px;
 display:grid;
 grid-template-columns:auto auto auto;
 justify-content: center;
 align-items: center;
 column-gap: 20px;
 
 `
let circle1 = document.createElement('div');
circle1.id = "circle1";
div3.append(circle1);
circle1.style.cssText =`
width: 60px;
height: 60px;
border-radius: 50%;
display:inline-block;
background-color:red;`

let circle2 = document.createElement('div');
circle2.id = "circle2";
div3.append(circle2);
circle2.style.cssText =`
width: 60px;
height: 60px;
border-radius: 50%;
display:inline-block;
background-color:orange;
`

let circle3 = document.createElement('div');
circle3.id = "circle3";
div3.append(circle3);
circle3.style.cssText =`
width: 60px;
height: 60px;
border-radius: 50%;
display:inline-block;
background-color:green;`

let button = document.createElement('button');
document.body.append(button);
button.innerHTML = 'NEXT';
button.style.cssText = `
position: relative;
 top: 300px;
 left: 400px;
 width: 80px;
 height: 100px;
 border: 2px solid grey;
 border-radius: 10px;
 display:grid;
 grid-template-columns:auto auto auto;
 justify-content: center;
 align-items: center;`


 button.onclick = function start(){
     
    if(circle1.style.backgroundColor == 'red'){
      circle1.style.backgroundColor = 'grey';
      circle2.style.backgroundColor = 'orange';
    }
    else if(circle2.style.backgroundColor == 'orange'){
      circle2.style.backgroundColor = 'grey';
      circle3.style.backgroundColor = 'green';
    }
    else if(circle3.style.backgroundColor == 'green') {
      circle3.style.backgroundColor = 'grey';
      circle1.style.backgroundColor = 'red';
    }
 }
 
//the fifth task

let listOfBooks = document.createElement('ol');






