const fotos = [
    {src:"Foto1.jpg", descripcion:"Un recuerdo que vive eternamente en el corazón"},
    {src:"Foto2.jpg", descripcion:"Momentos que nunca olvidaremos"},
    {src:"Foto3.jpg", descripcion:"Su cariño siempre nos acompaña"},
    {src:"Foto4.jpg", descripcion:"Siempre presente en nuestra memoria"}
];

let indice = 0;
let intervalo;

const imagen = document.getElementById("imagenOfrenda");
const descripcion = document.getElementById("descripcion");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const puntos = document.getElementById("puntos");
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
const iconoMusica = document.getElementById("iconoMusica");
const textoMusica = document.getElementById("textoMusica");

function crearIndicadores(){
    puntos.innerHTML = "";
    fotos.forEach((_,i)=>{
        const punto = document.createElement("span");
        punto.classList.add("punto");
        punto.addEventListener("click",()=>{
            mostrarFoto(i);
            reiniciarAuto();
        });
        puntos.appendChild(punto);
    });
}

function mostrarFoto(nuevoIndice){
    indice = (nuevoIndice + fotos.length) % fotos.length;
    imagen.src = fotos[indice].src;
    descripcion.textContent = fotos[indice].descripcion;
    actualizarIndicadores();
}

function actualizarIndicadores(){
    const todosPuntos = document.querySelectorAll(".punto");
    todosPuntos.forEach((punto,i)=>{
        punto.classList.toggle("activo", i === indice);
    });
}

function reiniciarAuto(){
    clearInterval(intervalo);
    intervalo = setInterval(()=>{
        mostrarFoto(indice +1);
    },6000);
}

anterior.addEventListener("click",()=>{
    mostrarFoto(indice -1);
    reiniciarAuto();
});
siguiente.addEventListener("click",()=>{
    mostrarFoto(indice +1);
    reiniciarAuto();
});

btnMusica.addEventListener("click",()=>{
    if(musica.paused){
        musica.play();
        iconoMusica.textContent="⏸";
        textoMusica.textContent=" Pausar música";
    } else {
        musica.pause();
        iconoMusica.textContent="▶";
        textoMusica.textContent=" Reproducir música";
    }
});

document.addEventListener("DOMContentLoaded",()=>{
    crearIndicadores();
    mostrarFoto(0);
    reiniciarAuto();
});
      
