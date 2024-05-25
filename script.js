
// Obtener teclas y audios
const listaTeclasSostenidas = Array.from(document.querySelectorAll(".sostenidas"));
const listaTeclasBlancas = Array.from(document.querySelectorAll(".notasBlancas"));
const listaAudios = Array.from(document.querySelectorAll(".audio"));

const keyCodesSostenidas = [27, 192, 49, 50, 51, 52, 53, 54, 55, 
	56, 57, 48, 187, 8, 46];
const keyCodesTeclasBlancas = [81, 87, 69, 82, 84, 89, 85, 73, 
	79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 13, 16];

// Reproducir audio

let i;

for (let i = 0; i < 21; i++) {
  (function(index) {

 	if (index < 15) {

	    listaTeclasSostenidas[index].addEventListener("click", () => {
	        listaAudios[index].play();
	    });
	    listaTeclasBlancas[index].addEventListener("click", () => {
        	listaAudios[index].play();
    	});

 	} else {

 		listaTeclasBlancas[index].addEventListener("click", () => {
        	listaAudios[index].play();
    	});
 	}

    document.addEventListener("keydown", function(event) {
      if (event.keyCode === keyCodesTeclasBlancas[index]) {
        listaAudios[index].play();
        listaTeclasBlancas[index].style.background = "black"; 
        listaTeclasBlancas[index].style.color = "white"; 
      } 

      if (event.keyCode == keyCodesSostenidas[index]) {
        listaAudios[index].play();
        listaTeclasSostenidas[index].style.background = "white"; 
        listaTeclasSostenidas[index].style.color = "black";
      }
    });

    document.addEventListener("keyup", function(event) {
      if (event.keyCode === keyCodesTeclasBlancas[index]) {
        listaTeclasBlancas[index].style.background = "white"; 
        listaTeclasBlancas[index].style.color = "black"; 
      } 

      if (event.keyCode == keyCodesSostenidas[index]) {
        listaTeclasSostenidas[index].style.background = "black"; 
        listaTeclasSostenidas[index].style.color = "white"; 
      }
    });
  })(i);
}