window.addEventListener("load", cargarPagina);
const formulario = document.getElementById("formulario").elements;
const passwrd = document.getElementById("password").value;

function pasarAMayus(){

}

function salCampoTexto(evento){
    var elem = evento.target;
    elem.value = elem.value.toUpperCase();
    
    
}

function salPasswrd2(evento){
    var elem = evento.target;
    var valido = false;
    if(passwrd==elem.value&&elem.maxLength<=8){
       valido = true;
}
return valido;
}

function validarFormulario() {
    console.log('Contraseñas coinciden y tienen al menos 8 caracteres.');
    console.log('Datos del formulario:');
    console.log('Nombre: ' + document.getElementById("nombre").value);
    console.log('Apellido: ' + document.getElementById("apellido").value);
    console.log('Correo Electrónico: ' + correoInput.value);
    console.log('Contraseña: ' + contrasena1);
}

function cargarPagina(){
    
    Array.from(formulario).forEach(element => {
        if(element.type=="text"){
            element.addEventListener("blur", salCampoTexto, false);
        }
        if(element.getElementById=="password2"){
            element.addEventListener("blur", salPasswrd2, false);
        }

        element.getElementById("enviar").addEventListener("click", validarFormulario,false);
    });



}