
document.addEventListener("DOMContentLoaded", () => {

  const sonidos = [
    { title: "DO# <br> REb", src: "/static/Audio/1.mp3", class: "sostenidas" },
    { title: "RE# <br> MIb", src: "/static/Audio/2.mp3", class: "sostenidas" },
    { title: "FA# <br> SOLb", src: "/static/Audio/3.mp3", class: "sostenidas" },
    { title: "SOL# <br> LAb", src: "/static/Audio/4.mp3", class: "sostenidas" },
    { title: "LA# <br> SIb", src: "/static/Audio/5.mp3", class: "sostenidas" },
    { title: "DO# <br> REb", src: "/static/Audio/6.mp3", class: "sostenidas" },
    { title: "RE# <br> MIb", src: "/static/Audio/7.mp3", class: "sostenidas" },
    { title: "FA# <br> SOLb", src: "/static/Audio/8.mp3", class: "sostenidas" },
    { title: "SOL# <br> LAb", src: "/static/Audio/9.mp3", class: "sostenidas" },
    { title: "LA# <br> SIb", src: "/static/Audio/10.mp3", class: "sostenidas" },
    { title: "DO# <br> REb", src: "/static/Audio/11.mp3", class: "sostenidas" },
    { title: "RE# <br> MIb", src: "/static/Audio/12.mp3", class: "sostenidas" },
    { title: "FA# <br> SOLb", src: "/static/Audio/13.mp3", class: "sostenidas" },
    { title: "SOL# <br> LAb", src: "/static/Audio/14.mp3", class: "sostenidas" },
    { title: "LA# <br> SIb", src: "/static/Audio/15.mp3", class: "sostenidas" },
    { title: "DO", src: "/static/Audio/1.mp3", class: "notasBlancas" },
    { title: "RE", src: "/static/Audio/2.mp3", class: "notasBlancas" },
    { title: "MI", src: "/static/Audio/3.mp3", class: "notasBlancas" },
    { title: "FA", src: "/static/Audio/4.mp3", class: "notasBlancas" },
    { title: "SOL", src: "/static/Audio/5.mp3", class: "notasBlancas" },
    { title: "LA", src: "/static/Audio/6.mp3", class: "notasBlancas" },
    { title: "SI", src: "/static/Audio/7.mp3", class: "notasBlancas" },
    { title: "DO", src: "/static/Audio/8.mp3", class: "notasBlancas" },
    { title: "RE", src: "/static/Audio/9.mp3", class: "notasBlancas" },
    { title: "MI", src: "/static/Audio/10.mp3", class: "notasBlancas" },
    { title: "FA", src: "/static/Audio/11.mp3", class: "notasBlancas" },
    { title: "SOL", src: "/static/Audio/12.mp3", class: "notasBlancas" },
    { title: "LA", src: "/static/Audio/13.mp3", class: "notasBlancas" },
    { title: "SI", src: "/static/Audio/14.mp3", class: "notasBlancas" },
    { title: "DO", src: "/static/Audio/15.mp3", class: "notasBlancas" },
    { title: "RE", src: "/static/Audio/16.mp3", class: "notasBlancas" },
    { title: "MI", src: "/static/Audio/17.mp3", class: "notasBlancas" },
    { title: "FA", src: "/static/Audio/18.mp3", class: "notasBlancas" },
    { title: "SOL", src: "/static/Audio/19.mp3", class: "notasBlancas" },
    { title: "LA", src: "/static/Audio/20.mp3", class: "notasBlancas" },
    { title: "SI", src: "/static/Audio/21.mp3", class: "notasBlancas" }
  ];

  // Elementos a manipular
  const botonColor = document.getElementById("boton-color");
  const h1 = document.querySelector("h1");
  const contenedorSonido = document.getElementById("contenedor");

  const keyCodesSostenidas = [27, 192, 49, 50, 51, 52, 53, 54, 55, 
  56, 57, 48, 187, 8, 46];
  
  const keyCodesTeclasBlancas = [81, 87, 69, 82, 84, 89, 85, 73, 
  79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 13, 16];

  let condicion = true;

  // Agregar los div al contenedor
  sonidos.forEach((sonido) => {

    const contenedor = document.createElement("div");
    contenedor.classList.add(sonido.class);

    const titulo = document.createElement("h5");
    titulo.innerHTML = sonido.title;

    const audio = document.createElement("audio");
    audio.classList.add("audio");
    audio.src = sonido.src;

    contenedor.appendChild(titulo);
    contenedor.appendChild(audio)
    contenedorSonido.appendChild(contenedor);

    // Reproducir audio
    contenedor.addEventListener("click", () => {

      const sonando = audio.paused;
      sonando ? audio.play() : audio.pause();   
    });
  });

  // Cambiar el color de fondo
  botonColor.addEventListener("click", () => {

    document.body.style.backgroundColor = condicion ? "black" : "white";
    h1.style.color = condicion ? "white" : "black";

    condicion = !condicion;
  });
});