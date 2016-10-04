var numeroA = "";
var numeroB = "";
var seleccion;
var sw = true;
var Me;
var puntoAvisador = false;

window.onload = function(){
    var igual = document.getElementById("igual");
    var elementoMe = document.getElementById("me");
    var elementoRe = document.getElementById("re");
    var elementoCe = document.getElementById("ce");
    
    numeraciones("cero");
    numeraciones("uno");
    numeraciones("dos");
    numeraciones("tres");
    numeraciones("cuatro");
    numeraciones("cinco");
    numeraciones("seis");
    numeraciones("siete");
    numeraciones("ocho");
    numeraciones("nueve");
    numeraciones("punto");
    
    operaciones("mas");
    operaciones("menos");
    operaciones("multi");
    operaciones("dividir");
    
    igual.addEventListener("click", solucion);
    elementoMe.addEventListener("click", setMe);    
    elementoRe.addEventListener("click", getMe);    
    elementoCe.addEventListener("click", setMeNull);    
}
/*numeraciones (numeros+operaciones) Añade los escuchadores de los numeros de manera automatica a través del mismo valor del botón*/
function numeraciones(numerito){
    var numero = document.getElementById(numerito);
    numero.addEventListener("click", function(){escribir(numero.innerHTML)});
}
/*Añade escuchadores a los operadores*/
function operaciones(operacion){
    var tipo = document.getElementById(operacion);
    tipo.addEventListener("click", function(){primerNumero(operacion)} );
    
    
}
/* Funcion primerNumero se activa cuando pulsamos las teclas +, -, / o x guarda el tipo de operación que hayamos seleccionado y guardamos el numero que haya introducido en numeroA*/
function primerNumero(operacion){
    var numeroUNO = document.getElementById("resultado");
        seleccion = operacion;
        numeroA = parseFloat(numeroUNO.innerHTML);
        numeroUNO.innerHTML = "";
        puntoAvisador = false;  
   
}

/*escribir - escribe lo que desees en el <p> de resultado. Tiene un sw que le indica si ya se ha realizado una operación, en caso de hacerlo, machaca la operación anterior  */
function escribir(caracter){
    var resultado = document.getElementById("resultado");
    if(puntoAvisador == true && caracter == '.'){
        alert("Nene, no puedes poner dos puntos en un numero");
    }else{
        if(caracter == '.'){
            puntoAvisador = true;
        }
        
       if(!sw){
        resultado.innerHTML = caracter;
        sw = true;
    }else{
        resultado.innerHTML+=caracter; 
        
        }  
    }
   

    
    
}

/* solucion -  funcion encargada de coger el segundo numero introducido, comprueba que en ambos campos haya algo, y realiza la operación selecionada con anterioridad*/
function solucion(){
    var resultado = document.getElementById("resultado");
    numeroB = parseFloat(resultado.innerHTML);
    
    if(numeroA !="" && numeroB !=""){  
    switch(seleccion){
        case "mas":{
            final(parseFloat(numeroA +numeroB));
            break;
        }
        case "menos":{
            final(parseFloat(numeroA) - parseFloat(numeroB));
            break;
        }
        case "multi":{
            final(parseFloat(numeroA) * parseFloat(numeroB));
            break;
        }
        case "dividir":{
            final(parseFloat(numeroA) / parseFloat(numeroB));
            break;
        }
    }
    
       }else{
           alert("Te falta un numero¡");
       }
    inicializarValores();
}
/* Le pasa el valor a escribrir y cambia el sw a false para que cuando se escriba un número despues de mostrar el resultado, fuerza a la calculadora a borrar todo e inicializa el avisador del punto a false*/
function final(valor){
    document.getElementById("resultado").innerHTML = valor;
    sw = false;
    puntoAvisador = false;
}

function inicializarValores(){
    numeroA = "";
    numeroB = "";
}

function setMe(){
    Me = document.getElementById("resultado").innerHTML;
}

function getMe(){
  document.getElementById("resultado").innerHTML = Me ;
   
}


function setMeNull(){
    Me = "";
}