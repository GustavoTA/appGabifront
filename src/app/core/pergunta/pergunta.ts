export class Pergunta{
    _id: number;
    nivel: number;
    pergunta: string;
    alternativa: [Alternativa];
    justificativa: string;
    moeda: number;
}

export class Alternativa{
    // tslint:disable-next-line:variable-name
    _id: number;
    correto: boolean;
    descricao: string;
}
