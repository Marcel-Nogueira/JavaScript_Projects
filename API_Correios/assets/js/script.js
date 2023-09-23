function consultarCEP () {
    let cep = document.querySelector ('#cep').value ;

    if (cep.length !== 8) {
        alert (`Este CEP ${cep} é invalido`);
        
        return;
    }

    //=== CONSUMINDO API ===
    const urlConsultaCEP = `https://viacep.com.br/ws/${cep}/json/`;

    fetch (urlConsultaCEP).then (function(response){
        response.json ().then (function(data){
            console.log (data);
            mostrarEndereco(data);
        })
    });

};

// === MOSTRAR INFORMAÇÕES NA TELA ===
function mostrarEndereco(dados) {
    let result = document.querySelector('#result');

    result.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                        <p>Complemento: ${dados.complemento}</p>
                        <p>Bairro: ${dados.bairro}</p>
                        <p>UF: ${dados.uf}</p>
                        <p>Localidade: ${dados.localidade}</p>
                        <p>DDD: ${dados.ddd}</p>
                        <p>IBGE: ${dados.ibge}</p>
                        <p>GIA: ${dados.gia}</p>
                        <p>SIAFI: ${dados.siafi}</p>`;
}





