window.addEventListener("load", cargarPagina);
const formulario = document.getElementById("formulario").elements;
const passwrd = document.getElementById("password").value;

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
    console.log(formulario);
    console.log('Contraseñas coinciden y tienen al menos 8 caracteres.');
    console.log('Datos del formulario:');
    console.log('Nombre: ' + document.getElementById("nombre").value);
    console.log('Apellido: ' + document.getElementById("apellidos").value);
    console.log('Fecha de nacimiento: ' + document.getElementById("fecha_nacimiento").value);
    console.log('DNI: ' + document.getElementById("dni").value);
    console.log('Email: ' + document.getElementById("email").value);
    console.log('Password: ' + document.getElementById("password").value);
    console.log('Género: ' + document.getElementById("genero").checked);
    console.log('Favorito: ' + document.getElementById("favorito").options[document.getElementById("favorito").selectedIndex]);
    console.log('Comentario: ' + document.getElementById("comentario").value);

}

function cargarPagina(){
    
    Array.from(formulario).forEach(element => {
        if(element.type=="text"){
            element.addEventListener("blur", salCampoTexto, false);
        }
    });
    document.getElementById("password2").addEventListener("blur", salPasswrd2, false);
    document.getElementById("enviar").addEventListener("click", validarFormulario,false);

}