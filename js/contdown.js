const d = document;
export default function contdown(id, limitDate, finalMessage) {
  const $contdown = d.getElementById(id),
    contdownDate = new Date(limitDate).getTime();

  let contdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = contdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $contdown.innerHTML = `<H3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos para el cumple de chichir</H3>`;

    if (limitTime < 0) {
      clearInterval(contdownTempo);

      $contdown.innerHTML = `<H3>${finalMessage} </H3>`;
    }
  }, 1000);
}
