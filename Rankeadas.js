let ranking = placar(30, 10)
let mensagem = "O Herói tem de saldo de " + ranking + " está no nível de "

function placar(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
}

switch (true) {
    case ranking <= 10:
        mensagem += "Ferro"
        break;

    case ranking > 10 && ranking <= 20:
        mensagem += "Bronze"
        break;

    case ranking > 20 && ranking <= 50:
        mensagem += "Prata"
        break;

    case ranking > 50 && ranking <= 80:
        mensagem += "Ouro"
        break;

    case ranking > 80 && ranking <= 90:
        mensagem += "Diamente"
        break;

    case ranking > 90 && ranking <= 100:
        mensagem += "Lendário"
        break;

    case ranking >= 101:
        mensagem += "Imortal"
        break;

    default:
        break;
}


console.log(mensagem);

