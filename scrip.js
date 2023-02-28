let menuVisible = false
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible =true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible= false;
}
//Funcion que aplica las animaciones de las habilidades//

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){

        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("maquinaria")
        habilidades[1].classList.add("robotica")
        habilidades[2].classList.add("español")
        habilidades[3].classList.add("video")
        habilidades[4].classList.add("photoshop")
        habilidades[5].classList.add("comunicacion")
        habilidades[6].classList.add("compañerismo")
        habilidades[7].classList.add("dedicacion")
        habilidades[8].classList.add("creatividad")
           
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
