import {Tablero, tablero, intentosJuego, estadoInicial, } from "./modelo";
import { voltearLaCarta, sePuedeVoltearLaCarta, sonPareja, parejaEncontrada, parejaNoEncontrada, iniciaPartida,
contarIntento, reiniciarContador, esPartidaCompleta } from "./motor";

const botonEmpezarPartida = (intentos: number) => {
    const botonElement = document.getElementById("boton");
    if (botonElement && botonElement instanceof HTMLButtonElement) {
        botonElement.addEventListener("click", () => {
        iniciaPartida(tablero);
        reiniciarCartas(intentos);
        reiniciarContador();
        pintarIntentos(intentos);
    });
    }  else {
        console.error("No existe el botón con el id boton");
    };
};

const pintarCartas = (intentos: number) => {
    for (let i = 0; i < tablero.cartas.length; i++) {
        
        const divImagenes = document.createElement("div");
        divImagenes.className = "cartas";
        divImagenes.id = `${i}`;
        divImagenes.setAttribute('data-indice-id', i.toString());

        const img = document.createElement('img');
        img.src = "";
        img.alt = "";
        img.className = "imagen";
        img.id = `imagen_${i}`;
        img.setAttribute('data-indice-id', i.toString());
        
        divImagenes.appendChild(img);

        const elementContenidoJuego = document.getElementById("contenidoJuego");
        if (elementContenidoJuego !== null && elementContenidoJuego !== undefined && elementContenidoJuego instanceof HTMLDivElement){
        elementContenidoJuego.appendChild(divImagenes);
        }

        divImagenes.addEventListener('click', (event) => handleImageClick(event, intentos))
    }

};

const reiniciarCartas = (intentos: number) => {
    const elementContenidoJuego = document.getElementById("contenidoJuego");

    if (elementContenidoJuego !== null && elementContenidoJuego !== undefined && elementContenidoJuego instanceof HTMLDivElement) {
    elementContenidoJuego.innerHTML = "";
    pintarCartas(intentos);
    } else {
    console.error("No se ha encontrao el div con el id contenidoJuego");
    };
};

const pintarIntentos = (intentos : number) => {
    const intentosElement = document.getElementById("intentos");
    if (intentosElement !== null && intentosElement !== undefined && intentosElement instanceof HTMLElement){
        intentosElement.innerHTML = `Nº de intentos: ${intentos}`;
    } else {
        console.error("No se ha encontrado el elemento con id intentos");
    };
};

const pintarMensajes = (mensaje: string) => {
    const mensajesPartidaElement = document.getElementById("mensajesPartida");
    if (mensajesPartidaElement !== null && mensajesPartidaElement !== undefined && mensajesPartidaElement instanceof HTMLElement){
        mensajesPartidaElement.textContent = mensaje;
    } else {
        console.error("No se ha encontrado el elemento con id mensajesPartida");
    };
}

const partidaCompleta = (mensaje:string) => {
    if (esPartidaCompleta(tablero)) {
        tablero.estadoPartida = "PartidaCompleta";
        mensaje = "Has ganadao la partida";
    } 
    
    return pintarMensajes (mensaje);
};

const tarjetaYaVolteada = (mensaje: string) => {
    if () {
        mensaje = "Esta carta ya está volteada";
    } else {
        mensaje ="";
    }
}

const voltearImagen = (targetElement: HTMLElement, idElemento: string) => {
    if (sePuedeVoltearLaCarta(tablero, Number(idElemento))) {
        voltearLaCarta(tablero, Number(idElemento));

        const indiceImagen = Number(targetElement.getAttribute('data-indice-id'));
        if (!isNaN(indiceImagen)) {
            const carta = tablero.cartas[indiceImagen];
            if (carta && carta.estaVuelta) {
                const elementImagen = targetElement.querySelector('img');
                if (elementImagen !== null && elementImagen !== undefined && elementImagen instanceof HTMLImageElement) {
                elementImagen.src = carta.imagen;
                }
            }
        }
    }
};

let estado: intentosJuego = estadoInicial;

const procesarParejaCartas = (indiceA: number, indiceB:number, intentos: number) => {
    if (indiceA !== undefined && indiceB !== undefined) {
        if (sonPareja(indiceA, indiceB, tablero)) {
            parejaEncontrada(tablero, indiceA, indiceB);
            partidaCompleta(mensaje);
        } else {
            voltearImagenes(indiceA, indiceB);
            parejaNoEncontrada(tablero, indiceA, indiceB)
            contarIntento(estado);
            pintarIntentos(intentos);
        }
    } else {
        console.error("Alguno de los índices está indefinido")
    }
};

const validarTarjeta = (tablero: Tablero, targetElement: HTMLElement, idElemento: string, intentos:number) => {
    if (!isNaN(Number(idElemento))) {
        voltearImagen(targetElement, idElemento);
        const indiceA =  tablero.indiceCartaVolteadaA;
        const indiceB = tablero.indiceCartaVolteadaB;
        if (indiceA !== undefined && indiceB !== undefined) {
        procesarParejaCartas(indiceA, indiceB, intentos,);
        }
    };
};

const ocultarElemento = (indice: number) => {
    const elemento = document.getElementById(`imagen_${indice}`);
    if (elemento !== null && elemento !== undefined && elemento  instanceof HTMLImageElement) {
        elemento.src = ``;
    } else {
        console.error("El elemento con id `imagen_${indice}` no es un elemento HTMLImageElement");
    }
};

const voltearImagenes = (indiceA: number, indiceB: number) => {
    setTimeout(() => {
        ocultarElemento(indiceA);
        ocultarElemento(indiceB);
    }, 500);
};

const handleImageClick = (event: Event, intentos:number) => {
    if (event instanceof MouseEvent) {
        const targetElement = event.target;
        if (targetElement instanceof HTMLElement) {
            const idElemento = targetElement.id;
            validarTarjeta(tablero, targetElement, idElemento, intentos)
        } else {
            console.error("No es un elemento html")
        }
    } else {
        console.error("No es un evento")
    }
};

document.addEventListener("DOMContentLoaded", () => {
    botonEmpezarPartida (0);
});
