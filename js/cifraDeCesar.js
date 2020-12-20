//Seção de Codificação
function cifraDeCesarCodifica() {
    let textoASerCodificado = document.getElementById("texto_codificar").value; //coletando texto
    let numeroDeslocamento = parseInt(document.getElementById("deslocamento").value); //coletando o deslocamento

    //imprimindo o resultado dentro de um elemento HTML
    document.getElementById("resultados").innerHTML = `<div class="col s12 m12 l12"><h3 class="white-text text-lighten-4">Resultados</h3><hr /><span class="white-text ">${cifraDeCesarEmAcao(textoASerCodificado, numeroDeslocamento)}</span></div>`;
}

function cifraDeCesarEmAcao(textoASerCodificado, numeroDeslocamento) {
    let ArrayParaTexto = [];
    let ArrayParaDeslocamento = [];
    let CodificacaoPropriamenteDita = "";

    for( let i = 0; i < textoASerCodificado.length; ++i ) {
        ArrayParaTexto.push(textoASerCodificado.charCodeAt(i));
    }

    for( let j = 0; j < ArrayParaTexto.length; ++j ) {
        if( ArrayParaTexto[j] >= 65 && ArrayParaTexto[j] <= 90 ) {
            ArrayParaDeslocamento.push((((ArrayParaTexto[j] - 65 + numeroDeslocamento) % 26) + 65));
        } else if( ArrayParaTexto[j] >= 97 && ArrayParaTexto[j] <= 122 ) {
            ArrayParaDeslocamento.push((((ArrayParaTexto[j] - 97 + numeroDeslocamento) % 26) + 97));
        } else {
            ArrayParaDeslocamento.push(ArrayParaTexto[j]);
        }
    }

    for(let k = 0; k < ArrayParaDeslocamento.length; ++k ) {
        CodificacaoPropriamenteDita = CodificacaoPropriamenteDita + String.fromCharCode(ArrayParaDeslocamento[k]);
    }

    return CodificacaoPropriamenteDita;
}


//Seção de Decodificação
function cifraDeCesarDecodifica() {
    let textoASerDecodificado = document.getElementById("texto_codificar").value; //coletando texto
    let numeroDeslocamento = parseInt(document.getElementById("deslocamento").value); //coletando o deslocamento

    //imprimindo o resultado dentro de um elemento HTML
    document.getElementById("resultados").innerHTML = `<div class="col s12 m12 l12"><h3 class="white-text text-lighten-4">Resultados</h3><hr /><span class="white-text ">${decifraDeCesarEmAcao(textoASerDecodificado, numeroDeslocamento)}</span></div>`;
}

function decifraDeCesarEmAcao( textoASerDecodificado, numeroDeslocamento ) {
    let ArrayParaTexto = [];
    let ArrayParaDeslocamento = [];
    let DecodificacaoPropriamenteDita = "";

    for( let i = 0; i < textoASerDecodificado.length; ++i ) {
        ArrayParaTexto.push(textoASerDecodificado.charCodeAt(i));
    }

    for( let j = 0; j < ArrayParaTexto.length; ++j ) {
        if( ArrayParaTexto[j] >= 65 && ArrayParaTexto[j] <= 90 ) {
            ArrayParaDeslocamento.push((((ArrayParaTexto[j] - 90 - numeroDeslocamento) % 26) + 90));
        }else if( ArrayParaTexto[j] >= 97 && ArrayParaTexto[j] <= 122 ) {
            ArrayParaDeslocamento.push((((ArrayParaTexto[j] - 122 - numeroDeslocamento) % 26) + 122));
        }else{
            ArrayParaDeslocamento.push(ArrayParaTexto[j]);
        }
    }

    for(let k = 0; k < ArrayParaDeslocamento.length; ++k ) {
        DecodificacaoPropriamenteDita = DecodificacaoPropriamenteDita + String.fromCharCode(ArrayParaDeslocamento[k]);
    }

    return DecodificacaoPropriamenteDita;
}