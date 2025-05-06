const botoes = document .querySelectorAll(".botao");
const texto = document .querySelectorAll(".aba-conteudo");
 
for (let i=0;  i <botoes.length; j++) {
    botoes[i] .onclik = function() {

    for(let j=0; j < botoes.length; j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");

    }

      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");}


}
 
const contadores = document .querySelectorAll(".contador");
const tempoObjetivol = new Date("2025-10-05T00:00:00");

contadores[0].textContent = calculatempo(tempoObjetivol);

function calculatempo(tempoObjetivol){
    let tempoatual = new Date ();
    let tempofinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/24);

    segundos %= 60;
    minutos %= 60;
    horas %=24;

    return dias+ " dias "  +  horas  +  " horas " + minutos + " minutos " + segundos + " segundos "
}