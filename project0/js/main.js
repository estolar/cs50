let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})

//menu


let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){enlacesHeader.classList.toggle("menudos")
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#ff0000";
        semaforo=true;

    }
})




