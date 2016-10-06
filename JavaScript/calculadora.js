var numeroA = "";
var numeroB = "";
var seleccion;
var sw = true;
var Me;
var puntoAvisador = false;
var pResultado;
var operaAc = false; 
window.onload = function(){
    var igual = document.getElementById("igual");
    var elementoMe = document.getElementById("me");
    var elementoRe = document.getElementById("re");
    var elementoCe = document.getElementById("ce");
    var lupa = document.getElementById("lupa");
    
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
    lupa.addEventListener("click", aumento);
    
    pResultado = document.getElementById("resultado");
    
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
    
    if(pResultado!= ""){
        numeroA = parseFloat(pResultado.innerHTML);
        seleccion = operacion;
        puntoAvisador = false;  
        operaAc = true;   
    }       
            
}

/*escribir - escribe lo que desees en el <p> de resultado. Tiene un sw que le indica si ya se ha realizado una operación, en caso de hacerlo, machaca la operación anterior  */
function escribir(caracter){
    //comprueba que se ha pulsado un botón operaciones, en caso afirmativo, borra y mete el nuevo numero
    if(operaAc){
        pResultado.innerHTML = "";
        operaAc = false;
    }
    
    if(puntoAvisador == true && caracter == '.'){
        alert("Nene, no puedes poner dos puntos en un numero");
    }else{
        if(caracter == '.'){
	   if(pResultado.innerHTML == ""){
		caracter = "0.";	
	    }
            puntoAvisador = true;
        }
        
       if(!sw){
        pResultado.innerHTML = caracter;
        sw = true;
    }else{
        pResultado.innerHTML+=caracter; 
        
        }  
    }
   

    
    
}

/* solucion -  funcion encargada de coger el segundo numero introducido, comprueba que en ambos campos haya algo, y realiza la operación selecionada con anterioridad*/
function solucion(){
   
    numeroB = parseFloat(resultado.innerHTML);
    
    if(numeroA!= "" && numeroB!= "" && operaAc!=true){  
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
    pResultado.innerHTML = valor;
    sw = false;
    puntoAvisador = false;
}

function inicializarValores(){
    numeroA = "";
    numeroB = "";
}

/* setMe - Añade a la variable global Me el valor de resultado */
function setMe(){
    Me = pResultado.innerHTML;
}

/* getMe -  Comprueba que Me no sea nulo y lo escribe en resultado en caso de que no lo sea*/
function getMe(){
    //comprueba que se ha pulsado un botón operaciones, en caso afirmativo, borra y mete el nuevo numero
  if(operaAc){
        pResultado.innerHTML = "";
        operaAc = false;
    }
  if(Me!="" && Me!=undefined){
        pResultado.innerHTML = Me ; 
  }else{
        alert("Nada en memoria");
  }

}

/* setMeNull - Vuelve nulo los campos me y el resultado*/
function setMeNull(){
    Me = "";
    pResultado.innerHTML = "";
}

/*aumento - Crea una ventana con el resultado en grande*/
function aumento(){
    if(pResultado!="" && pResultado!=undefined )
    var myWindow = window.open("", "", "width=800,height=50");
    
 myWindow.document.write('<h1>' + pResultado.innerHTML + '</h1>');
    
}