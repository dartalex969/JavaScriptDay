

let click = document.querySelector('.paintWrapper')
let colorWrapper = document.querySelector('.colorWrapper')
let allColors = document.querySelectorAll('.color')

colorWrapper.addEventListener('click',(e)=>{
    removeBorder()
    if(e.target !== colorWrapper){
    e.target.style.border = '3px solid #1AF230'
    }
    color = e.target.style.backgroundColor
})

click.addEventListener('click',(e)=>{
    let allRadios = document.querySelectorAll('#figure')
    let a = `x:${e.offsetX}  y:${e.offsetY}`
    for(let radio of allRadios){
        if(radio.checked){
            let div = document.createElement('div')
            div.classList.add(radio.nextElementSibling.classList)
            div.style.position = 'absolute'
            div.style.backgroundColor = color
            div.style.top = (e.pageY-25) + 'px'
            div.style.left = (e.pageX-20) + 'px'
            if(radio.value = 'triangle'){
                div.style.borderLeft = ` 50px solid ${color}`;
                div.style.backgroundColor = 'blanchedalmond'
            }else{
                div.style.backgroundColor = color
            }
            click.append(div)
        }
    }
    
})  
function removeBorder(){
    for(let i = 0;i < allColors.length;i++){
        allColors[i].style.border = 'none'
    }
}