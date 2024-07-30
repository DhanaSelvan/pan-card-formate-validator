var result = document.getElementById('result');
var btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    var RE = '[A-Z]{5}[0-9]{4}[A-Z]';
    var number = document.getElementById('pan').value;
    if(number.length==10){
        if(number.match(RE)){
            result.innerHTML = 'Valid Pan Number Formate';
            result.style.color = 'green';
        } else {
            result.innerHTML = 'InValid Pan number Formate';
            result.style.color = 'red';
        }
    } else {
        alert('Number Should be in 10-digits');
    } 
})