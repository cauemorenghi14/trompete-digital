function toca (som) {
    document.querySelector(som).play();
} // Essa função irá dar o play no SOM (tag audio)



const NodeListBotoes = document.querySelectorAll('.botao');

// Essa variável seleciona os botÕes na tela.

for (let i = 0; i < NodeListBotoes.length; i++) {
    const botao = NodeListBotoes[i];
    const sons = botao.classList[1]
    const idAudios = `#som_${sons}`

    botao.onclick = () => {
        toca(idAudios)
    }

    botao.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            botao.classList.add('ativo')
        }
    }

    botao.onkeyup = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            botao.classList.remove('ativo')
        }
    }

}

// Essa função permite que, ao clicar sobre um determinado botão, chame a função 'toca' para ela dar o play na mesma nota do botão clicado.





