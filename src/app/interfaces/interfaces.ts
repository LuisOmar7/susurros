//Interfaces para atrapar los datos del inicio
export interface datosInicio{
    id: string;
    data: inicio;
}
export interface inicio{
    imagen: string;
    titulo: string;
    descripcion: string;
}

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

//Interfaces para atrapar los datos del módulo Mecánicas
export interface datosM{
    id: string;
    data: infoM;
}
export interface infoM{
    id: number;
    imagen: string;
    nombre: string;
    descripcion: string;
}

//Interfaces para atrapar los datos del módulo Items
export interface datosI{
    id: string;
    data: infoI;
}
export interface infoI{
    id: number;
    foto: string;
    nombreitem: string;
    descripcion: string;
    ubicacion: string;
}

//Interfaces para atrapar los datos de la clasificación
export interface datosC{
    id: string;
    data: infoC;
}
export interface infoC{
    id: number;
    nombre: string;
    concepto: string;
    clasificacion: string;
    descripcion: string;
}

//Interfaces para atrapar los comentarios
export interface dataComents{
    id: string;
    data: coments;
}
export interface coments{
    nombre: string;
    comentario: string;
    fecha: Date;
}

//Interfaces para obtener vídeos
export interface datosV{
    id: string;
    data: videos;
}
export interface videos{
    nombre: string;
    url: string;
}
