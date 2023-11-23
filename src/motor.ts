import { Carta, Tablero,} from "./modelo";

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
export const barajarCartas = (cartas : Carta[]): Carta[] => {
    for (let i = cartas.length -1; i > 0; i--) {
    const indiceAleatorio = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[indiceAleatorio]] = [cartas[indiceAleatorio], cartas[i]];
    }
    return cartas;
  }

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/

export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
    const carta = tablero.cartas[indice];

    if (!carta.encontrada && !carta.estaVuelta ) {
        return true;
    }
    if (tablero.cartas.filter((carta) => carta.estaVuelta).length <= 1) {
       return true;
    }
    return false;
  };
  
export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    const carta = tablero.cartas[indice];
    carta.estaVuelta = true;

    if (tablero.indiceCartaVolteadaA === undefined)
    {tablero.indiceCartaVolteadaA = indice
    }else{
    tablero.indiceCartaVolteadaB = indice}
  }

  //Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id

  export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    const cartaA = tablero.cartas[indiceA];
    const cartaB = tablero.cartas[indiceB];

    return cartaA.idFoto === cartaB.idFoto;
  };

  // Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.

  export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    const cartaA = tablero.cartas[indiceA];
    const cartaB = tablero.cartas[indiceB];

    cartaA.encontrada = true;
    cartaB.encontrada = true;

    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
  };


  export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    const cartaA = tablero.cartas[indiceA];
    const cartaB = tablero.cartas[indiceB];

    cartaA.encontrada = false;
    cartaB.encontrada = false;

    cartaA.estaVuelta = false;
    cartaB.estaVuelta = false;

    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
  }

  //Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
      

export const esPartidaCompleta = (tablero: Tablero): boolean => {
    return tablero.cartas.every((carta) => carta.encontrada);
  }

export const cambiarEstadoAPartidaCompleta = (tablero: Tablero) => {
  tablero.estadoPartida = "PartidaCompleta";
}
  // Iniciar partida

export const iniciaPartida = (tablero: Tablero): void => {
    // Baraja las cartas antes de comenzar la partida
    tablero.cartas = barajarCartas(tablero.cartas);

    // Reinicia el estado de las cartas en el tablero
    tablero.cartas.forEach(carta => {
        carta.estaVuelta = false;
        carta.encontrada = false;
    });

    // Reinicia los índices de las cartas volteadas en el tablero
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;

    // Establece el estado de la partida como "CeroCartasLevantadas"
    tablero.estadoPartida = "CeroCartasLevantadas";
};
    





