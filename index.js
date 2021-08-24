window.onload=inicio;

var credito=Math.floor(Math.random()*4)+9;
var imagenes=["aguacate.png","ajo.png", "cebolla.png","pepino.png", 
"puerro.png","tomate.png", "zanahoria.png" ];

var premios=[3,2,2,3,2,3,5];
var numeros_actuales=[];

function inicio(){

    document.getElementById("tirar").onclick=lanzar_inicio;



}

function lanzar_inicio(){
    numeros_actuales=[];

    for(let k=0;k<document.getElementsByClassName("boton").length;k++){

        numeros_actuales.push(escoger_numero());
        mostrar_imagen(k,numeros_actuales[k]);
    }

 comparar();
}


function lanzar_uno(){



}

function escoger_numero(){

    var azar=Math.floor(Math.random()*imagenes.length);
    return azar;
}

function mostrar_imagen(num, im){

    document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src="img/"+imagenes[im]



}

function comparar(){

    if( numeros_actuales[0]==numeros_actuales[1] &&
        numeros_actuales[1]==numeros_actuales[2]){

        let mensaje=`Has ganado ${premios[numeros_actuales[0]]} monedas`;

        mostrar_mensaje(mensaje);
        }



}

function actualizar(){



}

function mostrar_mensaje(m){
    document.getElementById("velo").style.display="flex";
    document.getElementById("mensaje").innerHTML= m;



}

function cerrar(){



}

function sonar(){



}