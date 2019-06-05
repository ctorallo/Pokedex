export interface pokemonInfo{
    abilities : string;
    forms : string;
    game_indices : string;
    height : string;
    held_items : string;
    id  : number;
    is_default : boolean;
    location_area_encounters : string;
    moves : string;
    species : string;
    sprites : spriteUrls;
    stats : string;
    types : string;
    weight : number;
}

export class spriteUrls{
    back_default : string;
    back_female : string;
    back_shiny : string;
    back_shiny_female : string;
    front_default : string;
    front_female : string;
    front_shiny : string;
    front_shiny_female : string;  
}