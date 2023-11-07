window.addEventListener("load", cargarPagina);
const formulario = document.getElementById("formulario").elements;
 

function MayusCampoTexto(evento){
    var elem = evento.target;
    elem.value = elem.value.toUpperCase();
}
function salPasswrd(evento){
    var elem = evento.target.value;
    if(elem.length<8){
        alert("Contraseña muy corta");
    }
}
function salPasswrd2(evento){
    var elem = evento.target;
    var passwrd = document.getElementById("password").value;
    if(passwrd!==elem.value){
       alert("Contraseñas diferentes");
    }
}

function validarFormulario() {



    Array.from(formulario).forEach(element => {
        if(element.type=="radio"){
            console.log(element.value +" : " + element.checked);
        }
        else if(element.type=="checkbox"){
            console.log(element.name +" : " + element.checked);
        }
        else{
           console.log(element.name +" : " + element.value); 
        }
        
    });

}

function cargarPagina(){
    
    Array.from(formulario).forEach(element => {
        if(element.type=="text"){
            element.addEventListener("blur", MayusCampoTexto, false);
        }
    });
    document.getElementById("password2").addEventListener("blur", salPasswrd2, false);
    document.getElementById("password").addEventListener("blur", salPasswrd, false);
    document.getElementById("enviar").addEventListener("click", validarFormulario,false);

}