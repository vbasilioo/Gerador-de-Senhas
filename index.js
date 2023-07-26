// Constantes pra gerar a senha
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;[]{}*&#*-@!';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

// Verificando se checkbox estao selecionadas
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const checkMaiusculas = document.querySelector('.chk-maiusculas');
const checkMinusculas = document.querySelector('.chk-minusculas');
const checkNumeros = document.querySelector('.chk-numeros');
const checkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenhaButton = document.querySelector('.gerar-senha');

// Função que gera a senha (core)
function gerarSenha(qtd, maiusc, minusc, num, simbol){
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i=0;i<qtd;i++){
        maiusc && senhaArray.push(geraMaiuscula());
        minusc && senhaArray.push(geraMinuscula());
        num && senhaArray.push(geraNumero());
        simbol && senhaArray.push(geraSimbolo());
    }
    
    return senhaArray.join('').slice(0, qtd);
}

// Função que mostra a senha no HTML
function gerar(){
    const senha = gerarSenha(
        qtdCaracteres.value,
        checkMaiusculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked
    );

    senhaGerada.innerHTML = senha;
}

gerarSenhaButton.addEventListener('click', gerar);