import "./style.css";

import "./modelo"

import "./motor"

import "./ui";

  /*

 // Prueba de concepto 4 - Voltear carta

  interface ImagenCarta {
    src: string;
    alt: string;
  }

const anverso: ImagenCarta = {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
    alt: "cerdo",
  };

const reverso: ImagenCarta = {
    src: "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44983/blue-square-emoji-clipart-md.png",
    alt: "back",
  };

function voltearCarta(): void {
    const elementImagenCarta = document.getElementById("imagenCarta1")
    
    if (elementImagenCarta !== null && elementImagenCarta !== undefined && elementImagenCarta instanceof HTMLImageElement) {
        if (elementImagenCarta) {
            if (elementImagenCarta.src === reverso.src) {
                elementImagenCarta.src = anverso.src;
            } else {
                elementImagenCarta.src = reverso.src;
            }
        }
}};

function voltearCarta2(): void {
    const elementImagenCarta = document.getElementById("imagenCarta2")
    
    if (elementImagenCarta !== null && elementImagenCarta !== undefined && elementImagenCarta instanceof HTMLImageElement) {
        if (elementImagenCarta) {
            if (elementImagenCarta.src === reverso.src) {
                elementImagenCarta.src = anverso.src;
            } else {
                elementImagenCarta.src = reverso.src;
            }
        }
}};

const elementDiv = document.getElementById("contenedorImagen");
if (elementDiv !== null && elementDiv !== undefined ) {
    elementDiv.addEventListener("click", voltearCarta);
    elementDiv.addEventListener("click", voltearCarta2);
} else {
    console.error(`No se ha encontrado el elemento con contenedorCarta`);
};





  // Prueba de concepto 1 - Barajar Array

function shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  shuffleArray(myArray);
  
  console.log(myArray);

// Prueba de concepto 2 - Voltear carta

  interface ImagenCarta {
    src: string;
    alt: string;
  }

const anverso: ImagenCarta = {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
    alt: "cerdo",
  };

const reverso: ImagenCarta = {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    alt: "león",
  };

function voltearCarta(): void {
    const elementImagenCarta = document.getElementById("imagenCarta");
    if (elementImagenCarta !== null && elementImagenCarta !== undefined && elementImagenCarta instanceof HTMLImageElement) {
        if (elementImagenCarta) {
            if (elementImagenCarta.src === reverso.src) {
                elementImagenCarta.src = anverso.src;
            } else {
                elementImagenCarta.src = reverso.src;
            }
        }
}};

const elementDiv = document.getElementById("contenedorImagen");
if (elementDiv !== null && elementDiv !== undefined ) {
    elementDiv.addEventListener("click", voltearCarta);
} else {
    console.error(`No se ha encontrado el elemento con contenedorCarta`);
};

 */