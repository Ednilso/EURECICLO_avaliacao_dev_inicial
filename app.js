/**
 * Ednilso Santana do Nascimento
 * 
 * Objetivo: 
 *      Avaliação inicial Eureciclo
 * 
 * Desafío:
 *      Desenvolver uma rotina para analisar o volume de várias garrafas e selecionar
 *      as garrafas que enchem um galão com a menor quantidade de sobra.
 * 
 * Técnica utilizada para análise dos volumes das garrafa:
 *      Subsequência - https://en.wikipedia.org/wiki/Subsequence
 *  
 * Data: 26/09/2020
 */

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function pegarDados(texto) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(texto, resolve);
    });
}

function somarVolume(lista) {
    if (lista.length === 0) {
        return 0;
    } else {
        return lista[0] + somarVolume(lista.slice(1));
    }
}

function selecionarVolumeGarrafaIdeal(lista, volumeGalao) {

    let listaIdeal = null;
    let restoVolumeListaIdeal = null;
    let qtdeGarrafaListaIdeal = null;

    let listaTemporaria = null;
    let restoTemporario = null;
    let volumeListaTemporaria = null;
    let garrafaListaTemporaria = null;

    let finalizar = false;

    let fnc = function (subLista = [], lista) {

        for (var i = 0; i < lista.length; i++) {

            listaTemporaria = [...subLista, lista[i]];
            volumeListaTemporaria = somarVolume(listaTemporaria);
            restoTemporario = (volumeListaTemporaria - volumeGalao);
            garrafaListaTemporaria = listaTemporaria.length;

            if (!(restoTemporario < 0)) {
                if (!listaIdeal) {
                    listaIdeal = listaTemporaria;
                    restoVolumeListaIdeal = restoTemporario;
                    qtdeGarrafaListaIdeal = garrafaListaTemporaria;
    
                } else if ((restoVolumeListaIdeal > restoTemporario) || ((restoVolumeListaIdeal == restoTemporario) && (qtdeGarrafaListaIdeal > garrafaListaTemporaria))) {
                    listaIdeal = listaTemporaria;
                    restoVolumeListaIdeal = restoTemporario;
                    qtdeGarrafaListaIdeal = garrafaListaTemporaria;
                } 
            }
            fnc([...subLista, lista[i]], lista.slice(i + 1));
        }
    }

    fnc([], lista);

    return ([listaIdeal, restoVolumeListaIdeal]);
}

start();

async function start() {
    let volumeGalao = null;
    let numeroGarrafa = null;
    let volumeGarrafa = null;
    let colecaoVolumes = [];
    let totalColecaoVolumes = null;
    let resposta = [];
    let indice = 0;

    while ((!parseFloat(volumeGalao)) || (parseFloat(volumeGalao) == 0)) {
        volumeGalao = await pegarDados('Insira o volume do galão? ');
    }

    while ((!parseInt(numeroGarrafa)) || (parseFloat(numeroGarrafa) == 0)) {
        numeroGarrafa = await pegarDados('Quantidade de garafas? ');
    }

    while (indice < numeroGarrafa) {

        while ((!parseFloat(volumeGarrafa)) || (parseFloat(volumeGarrafa) == 0)) {
            volumeGarrafa = parseFloat(await pegarDados(`Volume Garrafa: ${indice + 1}. ? `));
            if (colecaoVolumes.filter(i => i === volumeGarrafa).length) {
                console.log(`Volume [ ${volumeGarrafa} ] já utilizado em outra garrafa`);
                volumeGarrafa = null;
            }
        }
        colecaoVolumes[indice] = volumeGarrafa;
        indice++;

        volumeGarrafa = null;

    }

    totalColecaoVolumes = somarVolume(colecaoVolumes);

    if (totalColecaoVolumes < volumeGalao) {
        console.log(`A soma total dos volume das garrafas [ ${totalColecaoVolumes} ] é insuficiente para encher o galão com capacidade de volume igual a [ ${volumeGalao} ] `);
        process.exit();
    }

    resposta = selecionarVolumeGarrafaIdeal(colecaoVolumes, volumeGalao);

    console.log(`Resposta: [${resposta[0].join('L, ')}L], sobra: ${resposta[1]}L e garrafas utilizadas: ${resposta[0].length}`);

    process.exit();

}