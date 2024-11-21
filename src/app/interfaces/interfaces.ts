export interface HistoriaBD {
    historia: PartesHistoria[]
}

export interface PartesHistoria{
    id: number,
    titulo: string,
    subtitulo: string,
    imagen: string,
    titulo1: string,
    texto1: string,
    titulo2: string,
    texto2: string,
    titulo3: string,
    texto3: string,
}


//Interfaces para modal de Detalle
export interface DetalleH{
    historia: PartesH;
}
export interface PartesH{
    id: number,
    titulo: string,
    subtitulo: string,
    imagen: string,
    titulo1: string,
    texto1: string,
    titulo2: string,
    texto2: string,
    titulo3: string,
    texto3: string,
}

