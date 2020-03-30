/*capturar elemento utilizando js Dom
*guardamos dentro de nuestra contante botonNumero lo que hace es llamar a todods los enelementos
*que estaban bajo ese nombre y nos lo almacena como un arreglo de datos
* llamamos los datos utilizando get element by name llamandolos por el nombre que tiene en html*/
const botonNumeros    = document.getElementsByName('dataNumbre');
/*Rrealizamos lo miusmo con los operadores*/
const buttonOperator  = document.getElementsByName('dataOperator');
const igual           = document.getElementsByName('dataIgual')[0];
const eliminar        = document.getElementsByName('dataDelete')[0];
const punto           = document.getElementsByName('dataPunto')[0];

//capturar el resultado
var result = document.getElementById('result');


//defirnor valriables para ejecutrar las funciones
var opeActual  = '';
var opeAnterio = '';
var operarNumero = '';
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


//capturar igual
igual.forEach(function(boton){
    boton.addEventListener('click', function(){
        //creamos metodos de calcular  y acutilizar
        calcular();
        actualizarDisplay();
    })
})
//captyurar eliminar 
eliminar.forEach(function(boton){
    boton.addEventListener('click', function(){
        clear();
        actualizarDisplay();
    })
})

punto.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarPunto(boton.innerText);   
        alert(punto.innerText);
    })
})

//llamado de los metodos

function agregarNumero(num){
    //cambiamos el valor del texto concatemamos los sting para que asi se vayan colocon "5-6"
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay(); 
}
//creamos el metodo de clear lo unico que realizamos en actualizar las variables
function clear(){
    opeActual  = '';
    opeAnterio = '';
    opeAnterio = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();