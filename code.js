document.getElementById("edit").addEventListener('click', function () {
    const lista = document.getElementsByClassName("edit");

    if (this.innerHTML === "Editar datos") {
        for (let index = 0; index < lista.length; index++) {
            lista[index].setAttribute("contentEditable", "true");
            lista[index].style.cssText+='background-color:white;';
            
        }
        this.innerHTML = "guardar cambios";
    } else {
        for (let index = 0; index < lista.length; index++) {
            lista[index].removeAttribute("contentEditable");
            lista[index].style.removeProperty("background-color");
        }
        this.innerHTML = "Editar datos";
    }

});

/* 
document.body.addEventListener('click',function(){
getElementById(this.id).append('li','nuevo item');
});




 */




