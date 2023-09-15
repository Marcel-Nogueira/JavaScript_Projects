// === PROJETO LUTA FUNCIONAL | ORIENTAÇÃO A OBJETO ===

// Objeto Principal | possui todas as caracteristicas padrões dos personagens 
const defaultCharacter = {
    name: "",
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
};


// ==========================================================
// CRIANDO OS GUERREIROS

const createKnight = (name) => {
    return {
        ...defaultCharacter, // Herdando as caracteristicas do defaultCharacter
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
        life:50,
        maxLife:50,
        attack: 14,
        defense: 3
    }
    
}

// ==========================================================
// CRIANDO OS MONSTROS

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
        name:"Big Monster",
        life: 120,
        maxLife: 120,
        attack: 16,
        attack: 6
    }
}

// ==========================================================
// CRIANDO O CENÁRIO COM PROPRIEDADES E FUNÇÕES 

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1Elements: null,
    fighter2Elements: null,

    // DANDO START NO JOGO
    // A função Start Recebe as 4 variáveis que aparecerão na tela.
    
    start (fighter1, fighter2, fighter1Elements, fighter2Elements){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Elements = fighter1Elements;
        this.fighter2Elements = fighter2Elements;

        // CONFIGURANDO BOTÃO DE ATAQUE
        this.fighter1Elements.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1,this.fighter2));
        this.fighter2Elements.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2,this.fighter1));
    
        // FUNÇÃO PARA ATUALIZAR OS DADOS EM TELA
        this.update ();
    
    },

    update () {
        // Fighter 1
        this.fighter1Elements.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed (0)} HP`;
        let fighter1LifePercent = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1Elements.querySelector(".bar").style.width = `${fighter1LifePercent}%`;
                        
        // Fighter 2
        this.fighter2Elements.querySelector(".name").innerHTML= `${this.fighter2.name} - ${this.fighter2.life.toFixed (0)} HP`;
        let fighter2LifePercent = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2Elements.querySelector(".bar").style.width = `${fighter2LifePercent}%`;

    },
    // CRIANDO FUNÇÃO DE ATAQUE
    doAttack (attacking, attacked) {
        console.log(`${attacking.name} está atacando ${attacked.name}`);
        
        this.update();
    
    }
}
