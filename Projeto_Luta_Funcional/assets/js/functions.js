// === PROJETO LUTA FUNCIONAL | ORIENTAÇÃO A OBJETO ===

// OBJETO PRINCIPAL | possui todas as caracteristicas padrões dos personagens 
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

    // === FUNÇÃO DE START GAME ===
    // A função Start Recebe as 4 variáveis que aparecerão na tela.
    
    start (fighter1, fighter2, fighter1Elements, fighter2Elements){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Elements = fighter1Elements;
        this.fighter2Elements = fighter2Elements;

        // === CONFIGURAÇÃO DOS BOTÕES DE ATAQUE ===
        this.fighter1Elements.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1,this.fighter2));
        this.fighter2Elements.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2,this.fighter1));
    
        
        this.update ();
    
    },

    // === FUNÇÃO PARA ATUALIZAR OS DADOS EM TELA ===
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
    // === FUNÇÃO DE ATAQUE ===
    doAttack (attacking, attacked) {
        
        // Retorno quando o personagem já morreu
        if (attacking.life <= 0 || attacked.life <= 0) {
            console.log("A Luta ja foi finalizada");
            return;
        }

        // === DEFININDO O FATOR DE ATAQUE E DEFESA DE FORMA ALEATÓRIA ===
        const attackFactor = (Math.random() * 2).toFixed (2);
        const defenseFactor = (Math.random () * 2).toFixed (2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDeffense = attacked.defense * defenseFactor;

        if (actualAttack > actualDeffense) {
            attacked.life -= actualAttack;
            // Verificação para não permitir que a vida não fique abaixo de 0
            // se a vida do atacado for < 0 então fixe em 0 : caso contrario permaneça o valor atual
            // com essa validação evitamos que a vida fique negativa
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            console.log(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);

        } else {
            console.log(`${attacked.name} conseguiu defender...`);
        }

        this.update();
    
    }
}
