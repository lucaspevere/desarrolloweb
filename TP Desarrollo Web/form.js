function cancelar(){
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    
}


function iniciar(){
    if (document.getElementById("usuario").value=="admin" && document.getElementById("contraseña").value=="admin"){
        alert("Sesión iniciada");
}
     else  {
        alert("Error de validación");
        document.getElementById("usuario").value = "";
        document.getElementById("contraseña").value = "";
        
    }
    

}

    