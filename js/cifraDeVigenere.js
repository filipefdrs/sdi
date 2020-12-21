//Constante utilizada tando para Criptografar quanto para Descriptografar
const abcdario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Seção de Codificação
function cifraDeVigenereCodifica() {
    let textoASerCodificado = document.getElementById("texto_codificar").value; //coletando texto
    let chave = document.getElementById("chave").value; //coletando a chave

    textoASerCodificado = textoASerCodificado.toUpperCase();
    chave = chave.toUpperCase();

    //imprimindo o textoAdequado dentro de um elemento HTML
    document.getElementById("resultado").innerHTML = `<div class="col s12 m12 l12"><h3 class="white-text text-lighten-4">Resultados</h3><hr /><span class="white-text ">${cifraDeVigenereEmAcao(textoASerCodificado, chave)}</span></div>`;
}

//Utilizando a Codificação através da crifra de Vigenere sempre em caixa Alta
function cifraDeVigenereEmAcao( textoASerCodificado, chaveMestre ) {
    let posicoes = retornaPosicoes(removerAcentos(chaveMestre));
    let palavra = removerAcentos(textoASerCodificado);
    let resultado = "";
    let ancora = 0;

    for( let i = 0; i < palavra.length; ++i ) {

        if( palavra[i] == " "|| palavra[i] == "'"|| palavra[i] == "!"|| palavra[i] == "@"|| palavra[i] == "#"|| palavra[i] == "$"|| palavra[i] == "%"|| palavra[i] == "¨"|| palavra[i] == "&"|| palavra[i] == "*"|| palavra[i] == "("|| palavra[i] == ")"|| palavra[i] == "-"|| palavra[i] == "_"|| palavra[i] == "="|| palavra[i] == "+"|| palavra[i] == '"'|| palavra[i] == "|"|| palavra[i] == ","|| palavra[i] == "."|| palavra[i] == ";"|| palavra[i] == "<"|| palavra[i] == ">"|| palavra[i] == ":"|| palavra[i] == "?"|| palavra[i] == "/"|| palavra[i] == "ª"|| palavra[i] == "º"|| palavra[i] == "§" ) {
            resultado += palavra[i];
        } else {
            if( ancora == posicoes.length ) {
                ancora = 0;
                resultado += abcdario[ criptografaCaracter( retornaPosicoes( palavra[i] ), posicoes[ancora] ) ];
                ancora++;
            } else {
                resultado += abcdario[ criptografaCaracter( retornaPosicoes( palavra[i] ), posicoes[ancora] ) ];
                ancora++;
            }
        }
    }

    return resultado;
}

//Seção de Decodificação
function cifraDeVigenereDecodifica() {
    let textoASerDecodificado = document.getElementById("texto_codificar").value; //coletando texto
    let chave = document.getElementById("chave").value; //coletando a  chave


    textoASerDecodificado = textoASerDecodificado.toUpperCase();
    chave = chave.toUpperCase();

    //imprimindo o textoAdequado dentro de um elemento HTML
    document.getElementById("resultado").innerHTML = `<div class="col s12 m12 l12"><h3 class="white-text text-lighten-4">Resultados</h3><hr /><span class="white-text ">${decifraDeVigenereEmAcao(textoASerDecodificado, chave)}</span></div>`;
}

//Acessórios de acabamento do make-up
function decifraDeVigenereEmAcao( textoASerDecodificado, chaveMestre ) {
    let posicoes = retornaPosicoes(removerAcentos(chaveMestre));
    let palavra = removerAcentos(textoASerDecodificado);
    let resultado = "";
    let ancora = 0; 

    for( let i = 0; i < palavra.length; i++ ) {
        
        if( palavra[i] == " "|| palavra[i] == "'"|| palavra[i] == "!"|| palavra[i] == "@"|| palavra[i] == "#"|| palavra[i] == "$"|| palavra[i] == "%"|| palavra[i] == "¨"|| palavra[i] == "&"|| palavra[i] == "*"|| palavra[i] == "("|| palavra[i] == ")"|| palavra[i] == "-"|| palavra[i] == "_"|| palavra[i] == "="|| palavra[i] == "+"|| palavra[i] == '"'|| palavra[i] == "|"|| palavra[i] == ","|| palavra[i] == "."|| palavra[i] == ";"|| palavra[i] == "<"|| palavra[i] == ">"|| palavra[i] == ":"|| palavra[i] == "?"|| palavra[i] == "/"|| palavra[i] == "ª"|| palavra[i] == "º"|| palavra[i] == "§" ) {
            resultado += palavra[i];
        } else {
            if( ancora == posicoes.length ) {
                ancora = 0;
                resultado += abcdario[ descriptografaCaracter(retornaPosicoes(palavra[i] ), posicoes[ancora]) ];
                ancora++;
            } else {
                resultado += abcdario[ descriptografaCaracter(retornaPosicoes(palavra[i] ), posicoes[ancora]) ];
                ancora++;
            }
        }
        
    }

    return resultado;
}

//Acessórios base-maquiagem
function retornaPosicoes( texto ) {
    let posicoes = [];

    for( let i = 0; i < texto.length; ++i ) {
        for( let j = 0; j < abcdario.length; ++j ) {
            if( texto[i] == abcdario[j] ) {
                posicoes.push(j);
            }
        }
    }

    return posicoes;
}

function removerAcentos( texto ) {
    let textoSemAcento = texto;

    //usando o construtor RegExp para corresponder um texto com um padrão
    textoSemAcento = textoSemAcento.replace(new RegExp('[ÁÀÃÂ]', 'gi'), 'A');
    textoSemAcento = textoSemAcento.replace(new RegExp('[ÉÈÊ]', 'gi'), 'E');
    textoSemAcento = textoSemAcento.replace(new RegExp('[ÍÌÎ]', 'gi'), 'I');
    textoSemAcento = textoSemAcento.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'O');
    textoSemAcento = textoSemAcento.replace(new RegExp('[ÚÙÛ]', 'gi'), 'U');
    textoSemAcento = textoSemAcento.replace(new RegExp('[Ç]', 'gi'), 'C');

    return textoSemAcento;
}

function criptografaCaracter(posicaoLetra, posicaoChave) {


    if( ((posicaoLetra[0] + posicaoChave) % Math.pow(abcdario.length, 2)) > abcdario.length - 1 ) {
        return (posicaoLetra[0] + posicaoChave) % Math.pow(abcdario.length, 2) - abcdario.length;
    }
    else {
        return (posicaoLetra[0] + posicaoChave) % Math.pow(abcdario.length, 2);
    }
}

function descriptografaCaracter( posicaoLetra, posicaoChave ) {
     
    if( ((posicaoLetra[0] - posicaoChave) % Math.pow(abcdario.length, 2)) < 0 ){
        return (posicaoLetra[0] - posicaoChave) % Math.pow(abcdario.length, 2) + abcdario.length;
    }
    else{
        return (posicaoLetra[0] - posicaoChave) % Math.pow(abcdario.length, 2);
    }   
}