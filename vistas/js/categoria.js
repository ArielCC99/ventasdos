var tabla;

//Creo una función init que se ejecuta al inicio de la aplicación
function init(){
    mostrarform(false);
}

//Creo una función para limpiar el formulario
function limpiar(){
    $("#idcategoria").val("");
    $("#nombre").val("");
    $("#descripcion").val("");
}

//Función para mostrar el formulario
function mostrarform(flag){
    limpiar();
    if(flag){
        $("#listadoregistros").hide();
        $("#formularioregistros").show();
        $("#btnGuardar").prop("disabled", false);
        $("#btnagregar").hide();
    }else{
        $("#listadoregistro").show();
        $("#formularioregistros").hide();
        $("#btnagregar").show();
    }
}

//Función para cancelar el formulario
function cancelarform(){
    limpiar();
    mostrarform(false);
}

//Ejecutamos la función init 
init();