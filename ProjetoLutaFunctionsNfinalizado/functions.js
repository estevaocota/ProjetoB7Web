const defaultCharacter = {
    name: "",
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: "Little Monster",
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: "Little Monster",
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    figther1El: null,
    fighter2El: null,

    start(fighter1, fighter2, figther1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.figther1El = figther1El;
        this.fighter2El = fighter2El;

        this.figther1El.querySelector('.attackButton').addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.figther2El.querySelector('.attackButton').addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },
    update() {
        // Fighter 1
        this.figther1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        
        // Fighter 2
        this.figther2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
    },

    doAttack(attacking, attacked) {

    }
}