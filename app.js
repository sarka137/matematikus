// alert ('test');
const vysledek = document.getElementById('vysledek');
const button = document.getElementById('proved');

function sum(x, y){
    return x + y;
}


function randomNum(min, max){
    if(min>max){
        [min, max] = [max, min];
    }
    return Math.round(Math.random() * (max-min) + min);
}

button.addEventListener('click', function(){
    let x = Number(document.getElementById('x').value);
    if (isNaN(x)) alert('X neni cislo!');
    let y = Number(document.getElementById('y').value);
    if (isNaN(y)) alert('Y neni cislo!');
    let funkce = document.getElementById('funkce').value;
    console.log(x,y,funkce);
    switch(funkce){
        case 'sum':
            vysledek.innerHTML = `${x} + ${y} = <b>${sum(x, y)}</b>`;
            break;
        case 'randomNum':
            vysledek.innerHTML = `Nahodne cislo mezi ${x} a ${y} je <b> ${randomNum(x, y)}</b>`;
            break;
        default:
            console.log('Funkce neexistuje')
    }
})