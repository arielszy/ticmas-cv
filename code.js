//cambio de tamaño de letra
var classes = ["f0", "f1", "f2", "f3", "f4"];
var classIndex = 2;
document.getElementById('+').addEventListener('click', function () {
    let previousClass = classIndex;
    classIndex++;
    classIndex = (classIndex == classes.length) ? classes.length - 1 : classIndex;
    changeClass(previousClass, classIndex);
});
document.getElementById('-').addEventListener('click', function () {
    let previousClass = classIndex;
    classIndex--;
    classIndex = (classIndex < 0) ? 0 : classIndex;
    changeClass(previousClass, classIndex);
});
function changeClass(previous, next) {
    if (previous != next) {
        var htmlElement = document.querySelector('html')
        htmlElement.classList.remove(classes[previous]);
        htmlElement.classList.add(classes[next]);
    }
}//hasta aca cambio tamaño


document.getElementById("edit").addEventListener('click', function () {//habilita y deshabilita la edicion
    const lista = document.getElementsByClassName("edit");
    if (this.innerHTML === "Editar datos") {
        for (let index = 0; index < lista.length; index++) {
            lista[index].setAttribute("contentEditable", "true");
            lista[index].style.cssText += 'background-color:white;';

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


function addElement(id) { //funcion para agregar item a los listados
    var ul = document.getElementById(id);
    var li = document.createElement("li");
   var text = prompt('Ingrese el texto del nuevo item');
   if (text !=null && text !='') {
     li.appendChild(document.createTextNode(text));
    ul.appendChild(li)
   }
   
}



function loadData() { //si fue modificado carga las modificaciones
    let modified = localStorage.getItem("modified");
    if (modified === "true") {
        document.getElementById("name").innerHTML = localStorage.getItem("name");
        document.getElementById("WEBSITE").innerHTML = localStorage.getItem("WEBSITE");
        document.getElementById("PHONE").innerHTML = localStorage.getItem("PHONE");
        document.getElementById("EMAIL").innerHTML = localStorage.getItem("EMAIL");
        document.getElementById("EMAIL").innerHTML = localStorage.getItem("EMAIL");
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

document.getElementById("default").onclick = function () {//hace que quede el doc original
    localStorage.clear();// borra todo el localStorage
    location.reload();//recarga el navegador

}

