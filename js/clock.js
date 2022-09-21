const d = document;

export function clock(startClockBtn, stopClockBtn, clock) {
  //const $btnStartClock = d.getElementById(clockBtnId);
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(startClockBtn)) {
      e.target.disabled = true;

      clockTempo = setInterval(() => {
        let timer = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${timer}</h3>`;
      }, 1000);
    }

    if (e.target.matches(stopClockBtn)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(startClockBtn).disabled = false;
    }
  });
}

export function alarm(startAlarm, stopAlarm, sound) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(startAlarm)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 2000);

      e.target.disabled = true;
    }

    if (e.target.matches(stopAlarm)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(startAlarm).disabled = false;
    }
  });
}
