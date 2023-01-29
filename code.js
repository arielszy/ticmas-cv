document.getElementById("edit").addEventListener('click', function () {
    const lista = document.getElementsByClassName("edit");

    if (this.innerHTML === "Editar datos") {
        for (let index = 0; index < lista.length; index++) {
            lista[index].setAttribute("contentEditable", "true");
            lista[index].style.cssText+='background-color:white;';
            
        }
        this.innerHTML = "guardar cambios";
    } else {
        saveData();
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




function loadData() { //si fue modificado carga las modificaciones
    let modified =localStorage.getItem("modified");
    console.log(modified);
    if (modified==="true") {
        document.getElementById("name").innerHTML=localStorage.getItem("name");
        document.getElementById("WEBSITE").innerHTML=localStorage.getItem("WEBSITE");
        document.getElementById("PHONE").innerHTML=localStorage.getItem("PHONE");
        document.getElementById("EMAIL").innerHTML=localStorage.getItem("EMAIL");
        document.getElementById("EMAIL").innerHTML=localStorage.getItem("EMAIL");
    } 
};

function saveData() {//guarda las modificaciones
    localStorage.setItem("modified", "true");//flag para saber si se modifico el documento
    localStorage.setItem("name", document.getElementById("name").innerHTML);
    localStorage.setItem("WEBSITE", document.getElementById("WEBSITE").innerHTML);
    localStorage.setItem("PHONE", document.getElementById("PHONE").innerHTML);
    localStorage.setItem("EMAIL", document.getElementById("EMAIL").innerHTML);
    localStorage.setItem("Location", document.getElementById("Location").innerHTML);
    
}

document.getElementById("default").onclick= function () {//hace que quede el doc original
    localStorage.clear();// borra todo el localStorage
    location.reload();//recarga el navegador
    
}