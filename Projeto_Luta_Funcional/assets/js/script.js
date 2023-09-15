// === CRIANDO OS GUERREIROS ===
//const char = createKnight ("Guerreiro");
const char = createSorcerer ("Mago");

// === CRIANDO OS ADVERSÁRIOS ===
const monster = createLittleMonster();
//const monster = createBigMonster ();


/// === RODANDO O GAME | Adicionando os elementos na tela===
stage.start (
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);
