// Knight ou Sorcerer = Guerreiro ou Mago
// LittleMonster ou BigMonster = Monstro pequeno ou Monstro Grande

/* Caracteristicas Gerais
 * Barra de vida com (maximo de vida & vida Atual)
 * ex. 100 de vida e quanto ele está agora
 * Nome do personagem
 * Força de ataque
 * Força de defesa
*/


                // === CRIANDO UM PERSONAGEM PADRÃO === 

class Character {

                // valores padroes para todos os personagens criados
                // Life e maxLife definido como 1 para não iniciar morto; 
                
    _life = 1; // Get & Set para não deixar a vida ser menor que 0 
    maxLife = 1;
    attack = 0;
    defense = 0;    

    constructor (name) {
        this.name = name;
    }

    get life () {
        return this._life;
    } 
    set life (newLife) {
                /* newLife é menor que 0 ? | então seta newLife para 0
                * essa definição evita que o personagem fique com valores
                * negativos de vida quando leva dano maior que sua vida atual
                */
        this._life = newLife < 0 ? 0 : newLife; 
    }
}

                /* === CRIANDO NOVOS PERSONAGENS USANDO CARACTERISTICAS PADROES
                * DA CLASSE CHARACTER E EXTENDENDO PARA NOVAS CLASSES DE PERSONAGENS
                */


                // ==  Herdando a classe Character e Extendendo ===

                // CLASSE GUERREIRO
class Knight extends Character {
    constructor (name) {
        super(name); // usando o nome da classe Pai Character
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

                // === CLASSE MAGO === 
class Sorcerer extends Character {
    constructor (name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;

    }
}

                // === INIMIGOS ====
                // LITTLE MONSTER

class LittleMonster extends Character {
    constructor () {
    super("Little Monster");
    this.life = 40;
    this.attack = 4;
    this.defense = 4;
    this.maxLife = this.life;

    }
}

                // BIG MONSTER

class BigMonster extends Character {
    constructor () {
        super("Big Monster");
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;

    }
}


                // === CLASSE QUE IRÁ CUIDAR DOS DADOS DO CENÁRIO ===

                /* Elementos necessários...
                * Quem são os 2 Lutadores
                * Elementos dos 2 Lutadores
                * 
                */

class Stage {
    constructor (fighter1, fighter2, fighter1Elements, fighter2Elements, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Elements = fighter1Elements; // Elementos gerais do lutador
        this.fighter2Elements = fighter2Elements; // Elementos gerais do lutador
        this.log = logObject;
    }

                // === FUNÇÃO DE INICIO DE GAME ===
    start () {
        this.update();

                // Função de click botão atacar
        this.fighter1Elements.querySelector('.attackButton').addEventListener('click', () => this.doAttack (this.fighter1,this.fighter2));
        this.fighter2Elements.querySelector('.attackButton').addEventListener('click', () => this.doAttack (this.fighter2,this.fighter1));

    }

                // === FUNÇÃO ATUALIZAR OS DADOS EM TELA ===
    update ()  {
        
                // Fighter 1
                // Introduzindo o nome do personagem no HTML
        this.fighter1Elements.querySelector('.name').innerHTML = `${this.fighter1.name} | HP ${this.fighter1.life.toFixed(0)}% `;
        this.fighter2Elements.querySelector('.name').innerHTML = `${this.fighter2.name} | HP ${this.fighter2.life.toFixed(0)}% `; // .toFixed (0) retira as casas decimais ficam apenas numeros inteiros
        
                // Calculando a porcentagem da Barra de Vida do Lutador 
        let fighter1Percentage = (this.fighter1.life / this.fighter1.maxLife)*100;
        this.fighter1Elements.querySelector('.bar').style.width = `${fighter1Percentage}%`;
        
                // Fighter 2
        let fighter2Percentage = (this.fighter2.life / this.fighter2.maxLife)*100;
        this.fighter2Elements.querySelector('.bar').style.width = `${fighter2Percentage}%`;

    }
    doAttack(attacking, attacked){
                // console.log(`${attaking.name} está atacando ${attacked.name}`);
        if (attacking.life <= 0  || attacked.life <= 0){
       this.log.addMessage(`Atacando Cachorro Morto`);
        
                // console.log("Atacando Cachorro Morto");
        return;
        }
                // Definido Fator de Attack aleatorio fixado em max. 2
        let attackFactor = (Math.random ()*2).toFixed(2);
                // Definido Fator de Defesa aleatorio fixado em max. 2
        let defenseFactor = (Math.random ()*2).toFixed(2);
                //console.log(attackFactor);
            
                // Multiplicar a força de ataque do personagem de forma
                // Aleatória | alguns ataques são mais fortes que outros.
                // um exemplo de Critical Hit no Ataque
        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;
                //console.log(actualAttack);
                //console.log(actualDefense);

        if (actualAttack > actualDefense ) {
                // quando a força de ataque for maior
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
            
               //console.log(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`);

        }else {
                // Quando a força de Ataque for igual ou menor que a força de defesa
                // Numeros gerados de forma aleatória
            this.log.addMessage(`${attacked.name} conseguiu defender...`);
            
                //console.log(`${attacked.name} conseguiu defender...`);

        }
        

        this.update();
    }
}

                // === LOG DE EVENTOS NA TELA ===

class Log {
    list = [];

    constructor(listElements) {
        this.listElements = listElements;
    }

    addMessage(msg) {
        this.list.push(msg); // adiciona nova mensagem a lista
        this.render(); // renderiza nova mensagem na tela
    }
    
    // renderizar itens na tela | tornar visual
    
    render() {
            //Comando para Limpar Lista
        this.listElements.innerHTML = "";

        for (let i in this.list) {
            this.listElements.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}