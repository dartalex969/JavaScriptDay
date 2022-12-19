

function colorField(){
    const color = document.getElementById("color").value;
    let regexp = /^[a-zA_Z]+$/;
    
        
        if(!(regexp.test(color))) { 
        alert('The color area should include letters only!');
        
      } 
      else console.log('color');
}




function codeField(){
    const code = document.getElementById("code").value;
    let regexpRgb = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/;
    if(!(regexpRgb.test(code))){
        alert("Input numbers as it's shown please!")
    }
     else console.log("code");
           
}



//let regexpRgb = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/;
//console.log(regexpRgb.test('100,100,100'));
//console.log(code);


    const containerBlock = document.createElement('div');
    containerBlock.className = "container";
    document.body.append(containerBlock);
    containerBlock.style.cssText=`
    width:100%;
    height:320px;
    display: grid;
    grid-template-columns: repeat(7,auto);
    grid-template-rows: auto auto;
    gap:20px;
    `
    

function addBlock(){
    const code = document.getElementById("code").value;
    const color = document.getElementById("color").value;
    const codeType = document.getElementById('colortype').value;
    const coloredBlock = document.createElement('div');
    coloredBlock.className = 'colored';
    coloredBlock.style.width = '200px';
    coloredBlock.style.height = '150px';
    //coloredBlock.style.position = 'relative';
    //coloredBlock.style.zIndex = '-1';
    coloredBlock.style.display = 'flex';
    coloredBlock.style.justifyContent = 'center';
    coloredBlock.style.alignItems = 'center';
    coloredBlock.style.backgroundColor = `rgb(${code})`;
    
    
    //a faded block with info about the color applied

    const infoBlock = document.createElement('div');
    infoBlock.className = 'faded';
    infoBlock.style.cssText = `
    position:relative;
    width:80%;
    height:60%;
    background-color:rgba(255,255,0,0.8);
    text-align:center;    
    `;

       

    containerBlock.appendChild(coloredBlock);
    coloredBlock.appendChild(infoBlock);
    infoBlock.innerHTML = `<br>${color}<br><br>${codeType}<br><strong>${code}</strong>`;

}

let btn = document.querySelector("#submit");
btn.addEventListener('click', e => {
        e.preventDefault(); 
        colorField();
        codeField();
        addBlock();
   
})