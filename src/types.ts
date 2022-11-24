
export interface Attributes {
    auteur: string,
    texte: string,
}


export interface dataType {
    "data": Message
}

export interface Message{
    id?: number,
    attributes: Attributes
}