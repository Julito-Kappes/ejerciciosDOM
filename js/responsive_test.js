const d = document;

export default function responsiveTester(id) {
  const $form = d.getElementById(id);
  let tester;
  d.addEventListener("submit", (e) => {
    //es lo mismo q e.target.maches
    if (e.target === $form) {
      // para que no procese la pagina
      e.preventDefault();

      tester = window.open(
        $form.direction.value,
        "tester",
        `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.exit.value) {
      tester.close();
    }
  });
}
