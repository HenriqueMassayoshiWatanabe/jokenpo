let pontosJogador =0, pontosPC = 0, pedra = 1, papel = 2, tesoura = 3

let partidaContador = 1

let partidaHTML = document.getElementById("partida")

partidaHTML.innerText = partidaContador

let pedraRadio = document.getElementById("pedra")
let papelRadio = document.getElementById("papel")
let tesouraRadio = document.getElementById("tesoura")
let resultadoHTML = document.getElementById("resultado")

let pcImg = document.getElementById("pc")


function jogar() {

    let jogadaJogador = 0

    if(pedraRadio.checked) {
        jogadaJogador = pedra
    } else if (papelRadio.checked) {
        jogadaJogador = papel
    } else if(tesouraRadio.checked) {
        jogadaJogador = tesoura
    }

    let jogadaPc = Math.floor(Math.random() * 3+1)

    if(jogadaPc == pedra) {
        pcImg.src = "pcpedra.png"
    } else if (jogadaPc == papel) {
        pcImg.src = "pcpapel.png"
    } else if(jogadaPc == tesoura) {
        pcImg.src = "pctesoura.png"
    }

    if(jogadaJogador == jogadaPc) {
        // empate
        empate()
    } else {
        if(jogadaJogador == pedra && jogadaPc == papel) {
            // pc ganha
            pcVenceu()
        } else if(jogadaJogador == pedra && jogadaPc == tesoura) {
            // player ganha
            jogadorVenceu()
        } else if(jogadaJogador == papel && jogadaPc == pedra) {
            // player ganha
            jogadorVenceu()
        } else if(jogadaJogador == papel && jogadaPc == tesoura) {
            // pc ganha
            pcVenceu()
        } else if (jogadaJogador == tesoura && jogadaPc == pedra) {
            // pc ganha
            pcVenceu()
        } else if(jogadaJogador == tesoura && jogadaPc == papel) {
            // player ganha
            jogadorVenceu()
        }
    }
}

function empate() {
    resultadoHTML.innerText = "EMPATE"
    atualizarContadorPartida()
}

function jogadorVenceu() {
    pontosJogador++
    document.getElementById("jogador").innerText = pontosJogador
    resultadoHTML.innerText = "JOGADOR VENCEU"
    atualizarContadorPartida()
}

function pcVenceu() {
    pontosPC++
    document.getElementById("computador").innerText = pontosPC
    resultadoHTML.innerText = "PC VENCEU"
    atualizarContadorPartida()
}

function atualizarContadorPartida() {
    partidaContador++
    partidaHTML.innerText = partidaContador
}