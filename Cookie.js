


    


//let regexpRgb = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/;
//console.log(regexpRgb.test('100,100,100'));
//console.log(code);


    const containerBlock = document.createElement('div');
    containerBlock.classcolor = "container";
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

    // an initial colored block
    coloredBlock.classcolor = 'colored';
    coloredBlock.style.width = '200px';
    coloredBlock.style.height = '150px';
    coloredBlock.style.display = 'flex';
    coloredBlock.style.justifyContent = 'center';
    coloredBlock.style.alignItems = 'center';

    if(codeType === 'RGB'){
        coloredBlock.style.backgroundColor = `rgb(${code})`;
    }
    else if(codeType === 'RGBA'){
        coloredBlock.style.backgroundColor = `rgba(${code})`;
    }
    else if(codeType === 'HEX'){
        coloredBlock.style.backgroundColor = `${code}`;
    }
    
    
    //a faded block with info about the color applied

     
        const infoBlock = document.createElement('div');
        infoBlock.classcolor = 'faded';
        infoBlock.style.cssText = `
        position:relative;
        width:80%;
        height:60%;
        background-color:rgba(255,255,255,0.5);
        text-align:center;    
        `;
        infoBlock.innerHTML = `${color}<br><br>${codeType}<br><br><strong>${code}</strong>`;
        
            
   if(color !== '' && code !== ''){

    containerBlock.appendChild(coloredBlock);
    coloredBlock.appendChild(infoBlock);

    
    }
    document.cookie = `color=${color};max-age=10800;`;

}


let btn = document.querySelector("#submit");
let colors = [];

    function validateColor() {
        const color = document.getElementById("color").value;

       
        
        console.log(color);
       
           
            if(!colors.includes(color.toLowerCase())){
                
                colors.push(color.toLowerCase());
                addBlock();
            }
            else {
                
                alert('Such a color has already been input.');
            }
            console.log(colors);
        }
    
    


btn.addEventListener('click', e => {
       
             

        // 

    const codeType = document.getElementById('colortype').value; 
    const color = document.getElementById("color").value;
    let regexp = /^[a-zA_Z]+$/;
    const code = document.getElementById("code").value;
    let regexpRgb = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;
    let regexpRgba = /^(\d+),\s*(\d+),\s*(\d+),\s*(0.\d+)$/;
    let regexpHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    
           

    if(!(regexp.test(color.toLowerCase())) && color !== '' ){

        const colorArea = document.getElementById('colorError');
        colorArea.innerHTML='Color can only contain letters';
        colorArea.style.cssText = `
        color:rgb(204,0,0);
        font-weight:700;
        position: relative;
        left: 30px;`;
        e.preventDefault(); 
    }
    
    else if( codeType === 'RGB' && !(regexpRgb.test(code)) && code !== '' ){

        const codeArea = document.getElementById('codeError');
        codeArea.innerHTML = `RGB code must match the pattern
        [0-255],[0-255],[0-255]`;
        codeArea.style.cssText = `
        color: rgb(204,0,0);
        font-weight:700;
        position:relative;
        left: 30px;
        width: 250px;
        display: inline-block;`;
        e.preventDefault(); 
    } 
    
    else if(codeType === 'RGBA' && !(regexpRgba.test(code)) && code !== '' ){

        const codeArea = document.getElementById('codeError');
        codeArea.innerHTML = `RGBA code must match the pattern
        [0-255], [0-255], [0-255], [0-1]`;
        codeArea.style.cssText = `
        color: rgb(204,0,0);
        font-weight:700;
        position:relative;
        left: 30px;
        width: 250px;
        display: inline-block;`;
        e.preventDefault(); 
    }    
    else if(codeType === 'HEX' && !(regexpHex.test(code)) && code !== '' ){

        const codeArea = document.getElementById('codeError');
        codeArea.innerHTML = `HEX code must match the pattern
        #******`;
        codeArea.style.cssText = `
        color: rgb(204,0,0);
        font-weight:700;
        position:relative;
        left: 30px;
        width: 250px;
        display: inline-block;`;
        e.preventDefault(); 
    }    
    
    
    else {
        if(code !== '' && color !== ''){
            e.preventDefault(); 
            
            validateColor();

            
           

            
          
        
    }
    
}
});



window.onload = () => {
    
    colors.length = 0;
    console.log(colors);
   
    
}
//console.log(colors);


console.log(document.cookie);

let regexpRgba = /^(\d+),\s*(\d+),\s*(\d+),\s*(0.\d+)$/;
console.log(regexpRgba.test('100, 100, 100, 0.9'));

let regexpHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
console.log(regexpHex.test('#000000'));