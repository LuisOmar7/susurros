//Interfaces para atrapar los datos correspondientes al módulo Historia
export interface datosH{
    id: string;
    data: infoH;
}
export interface infoH{
    id: number;
    titulo: string;
    subtitulo: string;
    imagen: string;
    titulo1: string;
    texto1: string;
    titulo2: string;
    texto2: string;
    titulo3: string;
    texto3: string;
}

//Interfaces para atrapar los datos correspondientes al módulo Personajes
export interface datosP{
    id: string;
    data: infoP;
}
export interface infoP{
    id: number;
    nombre: string;
    descripcion: string;
    foto: string;
    vida: number;
    ataque: number;
    arma: string;
    habilidad1: string;
    habilidad2: string;
    habilidad3: string;
}
