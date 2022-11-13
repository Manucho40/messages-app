
export type Attributes = {
    auteur: string,
    texte: string,
}


export interface Message{
    id: number,
    attributes: Attributes
}