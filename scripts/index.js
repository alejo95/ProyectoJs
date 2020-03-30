/*capturar elemento utilizando js Dom
*guardamos dentro de nuestra contante botonNumero lo que hace es llamar a todods los enelementos
*que estaban bajo ese nombre y nos lo almacena como un arreglo de datos
* llamamos los datos utilizando get element by name llamandolos por el nombre que tiene en html*/
const botonNumeros    = document.getElementsByName('dataNumbre');
/*Rrealizamos lo miusmo con los operadores*/
const buttonOperator  = document.getElementsByName('dataOperator');
const igual           = document.getElementsByName('dataIgual')[0];
const botonDelete     = document.getElementsByName('dataDelete')[0];

//capturar el resultado
var result = document.getElementById('result');


//defirnor valriables para ejecutrar las funciones
var opeActual  = ' ';
var opeAnterio = ' ';
var operarNumero = ' ';
var operacion = undefined;

//agregar evento onClick 
botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
})

//capturando operadores
buttonOperator.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarOperador(boton.innerText);
    })
})


//capturar eliminar y funcion eliminar 
botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});


//llamado de los metodos
function agregarNumero(num){
    //cambiamos el valor del texto concatemamos los sting para que asi se vayan colocon "5-6"
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay(); 
}
//capturar igual
igual.addEventListener('click', function(){
    //creamos metodos de calcular  y acutilizar
    calcular();
    actualizarDisplay();
});

//calcular la operación

function agregarOperador (op){
    if(opeActual === '') return;
    if(opeAnterio !== ''){
        calcular()
    }
    operacion =op.toString();
    opeAnterio = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeActual);
    const actual = parseFloat(opeAnterio);

    //si son numerocos
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case '%':
            calculo = anterior * (actual/100);
            break;
        
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterio = '';
}


//creamos el metodo de clear lo unico que realizamos en actualizar las variables
function clear(){
    opeActual  = ' ';
    opeAnterio = ' ';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();