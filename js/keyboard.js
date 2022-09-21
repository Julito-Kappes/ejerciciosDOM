const d = document;
let x = 0,
  y = 0,
  heightViewport = window.innerHeight || d.documentElement.clientHeight;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  /*console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall, limitsStage);*/

  //const move = (direction) => {};

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      //move("left");

      if (limitsBall.left > limitsStage.left + 10) {
        x--;
      }
      break;
    case 38:
      //move("up");
      if (limitsStage.top > heightViewport / 6) {
        e.preventDefault();
        if (limitsBall.top > limitsStage.top + 10) {
          y--;
        }
      }
      break;
    case 39:
      e.preventDefault();
      //move("right");

      if (limitsBall.right < limitsStage.right - 10) {
        x++;
      }
      break;
    case 40:
      //move("down");
      if (limitsStage.top > 0 && limitsStage.bottom < heightViewport) {
        e.preventDefault();

        if (limitsBall.bottom < limitsStage.bottom - 10) {
          e.preventDefault();
          y++;
        }
      }
      break;

    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcut(e) {
  /*console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl:${e.ctrlKey}`);
  console.log(`alt:${e.altKey}`);
  console.log(`shift:${e.shiftKey}`);
  console.log(e);*/

  if (e.key === "a" && e.ctrlKey) {
    alert("Haz lanzado una alerta con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }

  if (e.key === "p" && e.shiftKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}
