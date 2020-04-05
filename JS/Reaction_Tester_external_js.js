function Modify_Inner_Class() {
    document.querySelector('#inner').style.display = 'block';
    document.querySelector('#inner').style.backgroundColor =  setColor();
    document.querySelector('#inner').style.borderRadius = setShape();
    var size = setWidth();
    document.querySelector('#inner').style.position = 'relative';
    document.querySelector('#inner').style.height = size+'%';
    document.querySelector('#inner').style.width = size+'%';
    document.querySelector('#inner').style.top = setPos(size);
    document.querySelector('#inner').style.left = setPos(size);

 }
function setColor() {
    var color = '#';
    var letters = '0123456789ABCDEF';
    for (i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

function setShape() {
    var perc = ['50%', '0%'];
    return perc[Math.floor(Math.random()*2)];
}

function setWidth() {
    //between 5 to 15%
    return (Math.floor(Math.random()*11) + 5);
}


function setPos(size) {
    //between 0 to 100-size%
    var size = size;
    return Math.floor(Math.random()*(100-size+1))+'%';
}

setTimeout(Modify_Inner_Class,Math.random()*2000);
var start = new Date();
document.getElementById("inner").onclick = function() {
    document.getElementById("inner").style.display = "none";
    var diff = new Date() - start;
    var end = diff/1000 + 's';
    document.getElementById("out").innerHTML = 'Your time: '+end;
    // Modify the inner class and calls a new div
    setTimeout(Modify_Inner_Class,Math.random()*2000);
    start = new Date();
}