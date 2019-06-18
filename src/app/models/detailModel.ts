export class PokemonInfo{
    abilities : AbilityInfo[];
    forms : string;
    game_indices : string;
    height : string;
    held_items : string;
    id  : number;
    is_default : boolean;
    location_area_encounters : string;
    moves : MoveInfo[];
    species : string;
    sprites : SpriteUrls;
    stats : Stats[];
    types : TypesArray[];
    weight : number;
}

export class Stats{
    base_stat : number;
    stat : StatName;
}

export class StatName{
    name: string;
}
export class TypesArray{
    slot : number;
    type : PokemonType;
}

export class PokemonType{
    name : string;
    url : string;
}

export class AbilityInfo{
    ability : Ability;
    is_hidden : boolean;
    slot : number;
}

export class Ability{
    name : string;
    url : string;
}

export class SpriteUrls{
    back_default : string;
    back_female : string;
    back_shiny : string;
    back_shiny_female : string;
    front_default : string;
    front_female : string;
    front_shiny : string;
    front_shiny_female : string;  
}

export class MoveInfo{
    move : MoveName;
}

export class MoveName{
    name : string;
    url : string;
}
