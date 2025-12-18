// Monster details generator based on ID
export const getMonsterDetails = (monsterId) => {
    const races = [
        'Zorblaxian', 'Crythoid', 'Nephaloid', 'Scythian', 'Vortexian',
        'Xenomorphic', 'Crystalline', 'Amoeboid', 'Chitinous', 'Gelatinous'
    ];

    const homePlanets = [
        'Zephyron-7', 'Kryllax Prime', 'Nebulos III', 'Void\'s Edge', 'Titan\'s Maw',
        'Shadowrealm Alpha', 'Luminous Beta', 'Obsidian Depths', 'Celestial Forge', 'The Abyss'
    ];

    const diets = [
        'Crystalline Minerals', 'Gaseous Nebula Clouds', 'Quantum Matter', 'Dimensional Energy',
        'Stellar Radiation', 'Void Essence', 'Crystallized Time', 'Frozen Plasma',
        'Antimatter Particles', 'Dark Energy Residue'
    ];

    const personalityTraits = [
        'Mischievous', 'Contemplative', 'Ferocious', 'Wise', 'Playful',
        'Mysterious', 'Protective', 'Curious', 'Ancient', 'Chaotic'
    ];

    const abilities = [
        'Shape-shifting', 'Telepathy', 'Time Manipulation', 'Dimensional Rifting',
        'Energy Absorption', 'Molecular Reconstruction', 'Quantum Entanglement',
        'Astral Projection', 'Gravity Manipulation', 'Reality Warping'
    ];

    // Use ID as seed for consistent generation
    const seed = monsterId;

    return {
        race: races[seed % races.length],
        height: `${180 + (seed * 7) % 150}cm`,
        weight: `${65 + (seed * 13) % 200}kg`,
        diet: diets[seed % diets.length],
        homePlanet: homePlanets[seed % homePlanets.length],
        personality: personalityTraits[seed % personalityTraits.length],
        primaryAbility: abilities[seed % abilities.length],
        secondaryAbility: abilities[(seed + 3) % abilities.length],
        dangerLevel: Math.ceil((seed % 10) / 2),
        intelligence: Math.ceil((seed % 10) / 2),
        age: `${(seed * 100) % 5000 + 500} cycles`
    };
};
