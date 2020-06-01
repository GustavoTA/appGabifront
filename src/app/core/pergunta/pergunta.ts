export class Pergunta{
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
