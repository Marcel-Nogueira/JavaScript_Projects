let log = new Log(document.querySelector('.log'));

let charKnight = new Knight ("Guerreiro");
//let charSourcerer = new Sorcerer ("Mago")
//let bigMonster = new BigMonster ();
let littleMonster = new LittleMonster ();


// === DEFININDO OS LUTADORES NO RING ===

const stage = new Stage (
    charKnight, // Fighter 1 
    littleMonster, // fighter 2
    document.querySelector('#char'), // Fighter 1 Elementos
    document.querySelector('#monster'), // Fighter 2 Elementos
    log
);

// === INICIANDO O JOGO ===
// Executando a função Start no JS de classes
stage.start();

