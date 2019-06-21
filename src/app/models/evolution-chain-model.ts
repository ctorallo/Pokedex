export class EvolutionChain{
    chain : ChainObject;
    species : EvoChainSpecies;
}

export class EvoChainSpecies{
    name : string;
}
export class ChainObject{
    evolves_to : ChainObject[];
    species : EvoChainSpecies;
}

