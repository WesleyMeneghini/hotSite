const $dia = document.getElementById('dia');
const $hora = document.getElementById('hora');
const $minuto = document.getElementById('minuto');
const $segundo = document.getElementById('segundo');
let dia;
let hora = 0;
let minuto = 0;
let segundos = 0;

/* Exibe na tela */
const contSegundos = (mins) =>$segundo.innerHTML = `<p>Seg</p><p>${mins - segundos}</p>`;
const contMinutos = (hmin) =>$minuto.innerHTML = `<p>Min</p><p>${hmin - minuto}</p>`;
const contHora = (fimDia) => $hora.innerHTML = `<p>Hora</p><p>${fimDia - hora}</p>`;
const contDia = (fimEvento) => $dia.innerHTML = `<p>Dia</p><p>${fimEvento - dia.getDate()}</p>`;

const exibirContador = () =>{
    contSegundos(60);
    contMinutos(60);
    contHora(24);
    contDia(22);

}

/* resata a data(dia, hora, minuto,segundo) */
const contador = () =>{
    dia = new Date;
    hora = dia.getHours();
    minuto = dia.getMinutes();
    segundos = dia.getSeconds();
    exibirContador();
}

/*atualiza a data */
setInterval(contador, 1000);