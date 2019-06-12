export class PokemonQuery{
    count : number;
    next : string;
    previous : string;
    results : Results[];
}

export class Results{
    name : string;
    url : string;
}

