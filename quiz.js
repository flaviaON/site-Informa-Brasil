let pular = document.getElementById("pular");
let pontuacao = document.getElementById("pontuacao");
let total = document.getElementById("total");
let contador = document.getElementById("contador");
let cont = 0;
let contPont = 0;
let duracao = 0;

let questao = document.querySelectorAll('.questao');
let respostas = document.querySelectorAll('.questao .respostas input');

pular.addEventListener('click', function() {
    passo();
    duracao = 25;
});

respostas.forEach(function(resp) {
    resp.addEventListener('click', function() {
        setTimeout(function() {
            passo();
            duracao = 25;
        }, 500);

        let valido = this.getAttribute("valido");
        if (valido == "valido") {
            contPont += 20;
            pontuacao.innerHTML = contPont;
            total.innerHTML = contPont;
        }
    })
})

function passo() {
    cont += 1;
    for(let i = 0; i < questao.length; i++) {
        questao[i].className = 'questao'
    }
    questao[cont].className = 'questao active'
    if(cont == 5) {
        pular.style.display = 'none';
        clearInterval(tempoDuracao);
        contador.innerHTML = 0;
    }
}

let tempoDuracao = setInterval(function() {
    if(duracao == 25) {
        duracao = 0;
    }
    duracao += 1;
    contador.innerHTML = duracao;

    if(contador.innerHTML == "25") {
        passo();
    }
}, 1000);