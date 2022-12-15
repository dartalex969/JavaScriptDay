

function colorField(){
    const color = document.getElementById("color").value;
    let regexp = /[0-9]/g;
    if(color.match(regexp)){
        alert('This field should not include numbers!');
    }
}