import {Tablero, tablero } from "./modelo";
import { voltearLaCarta, sePuedeVoltearLaCarta, sonPareja, parejaEncontrada, parejaNoEncontrada, iniciaPartida  } from "./motor";

document.addEventListener("DOMContentLoaded", () => {
    const botonElement = document.getElementById("boton");
    
    if (botonElement && botonElement instanceof HTMLButtonElement) {
        botonElement.addEventListener("click", () => {
        iniciaPartida(tablero);
        reiniciarCartas();
    });
    }  else {
        console.error("No existe el botón con el id boton");
    };
});

const reiniciarCartas = () => {
    
const elementContenidoJuego = document.getElementById("contenidoJuego");
if (elementContenidoJuego !== null && elementContenidoJuego !== undefined && elementContenidoJuego instanceof HTMLDivElement) {
    elementContenidoJuego.innerHTML = "";
    } else {
    console.error("No se ha encontrao el div con el id contenidoJuego");
    };

    for (let i = 0; i < tablero.cartas.length; i++) {
        
        const divImagenes = document.createElement("div");
        const cartaDelListado = tablero.cartas[i];

        divImagenes.className = "cartas";
        divImagenes.id = `cartas_${i}`;
        divImagenes.setAttribute('data-indice-id', i.toString());

        divImagenes.style.display = !cartaDelListado.estaVuelta ? "flex" : "none";

        const img = document.createElement('img');
        img.src = "";
        img.alt = "";
        img.className = "imagen";
        img.id = `imagen_${i}`;
        img.setAttribute('data-indice-id', i.toString());
        
        const elementContenidoJuego = document.getElementById("contenidoJuego");
        if (elementContenidoJuego !== null && elementContenidoJuego !== undefined && elementContenidoJuego instanceof HTMLDivElement){
        elementContenidoJuego.appendChild(divImagenes);
        }

        divImagenes.appendChild(img);
        divImagenes.addEventListener('click', (event) => handleImageClick(event))
    }

    
};

const voltearImagen = (targetElement: HTMLElement, idElemento: string) => {
    if (sePuedeVoltearLaCarta(tablero, Number(idElemento))) {
        const elementImagen = targetElement.querySelector('img') as HTMLImageElement | null;
        const divImagenes = targetElement as HTMLDivElement;

        if (elementImagen) {
            elementImagen.style.visibility = "hidden";
        } else {
            console.error("El elemento no es una imagen");
            return;
        }

        divImagenes.style.display = tablero.cartas[Number(idElemento)].estaVuelta ? "flex" : "none";

        voltearLaCarta(tablero, Number(idElemento));

        const indiceImagen = Number(targetElement.getAttribute('data-indice-id'));
        if (!isNaN(indiceImagen)) {
            const carta = tablero.cartas[indiceImagen];
            console.log(carta);
            if (carta && carta.estaVuelta) {
                elementImagen.src = carta.imagen;
                elementImagen.style.visibility = "visible";
            }
        }
    }
};

const procesarParejaCartas = () => {
    if (tablero.indiceCartaVolteadaA !== undefined && tablero.indiceCartaVolteadaB !== undefined) {
        if (sonPareja(tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB, tablero)) {
            parejaEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB)
        } else {
            voltearImagenes(tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB);
            parejaNoEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB)
        }
    } else {
        console.error("Alguno de los índices está indefinido")
    }
};

const validartarjeta = (tablero: Tablero, targetElement: HTMLElement, idElemento: string) => {
    if (!isNaN(Number(idElemento))) {
        voltearImagen(targetElement, idElemento);
    
        if (tablero.indiceCartaVolteadaA === undefined 
        || tablero.indiceCartaVolteadaB === undefined) {
        return;
        }
        procesarParejaCartas();
    };
}

const voltearImagenes = (indiceA: number, indiceB: number) => {

    const ocultarElemento = (indice: number) => {
        const elemento = document.getElementById(`imagen__${indice}`);
        if (elemento !==null && elemento !==undefined && elemento  instanceof HTMLElement) {
            elemento.classList.add('d-none');
        } else {
            console.error("No es un elemento html");
        }
    };

    setTimeout(() => {
        ocultarElemento(indiceA);
        ocultarElemento(indiceB);
    }, 500);
};

const handleImageClick = (event: Event) => {
    console.log("funciona");
    if (event instanceof MouseEvent) {
        const targetElement = event.target;
        if (targetElement instanceof HTMLElement) {
            const idElemento = targetElement.id;
            validartarjeta(tablero, targetElement, idElemento)
        } else {
            console.error("No es un elemento html")
        }
    } else {
        console.error("No es un evento")
    }
}
