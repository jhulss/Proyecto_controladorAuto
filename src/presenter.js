import controladorAuto from "./ControladorAuto";

const first = document.querySelector("#primera-coordenada");
const second = document.querySelector("#segunda-coordenada");
const form = document.querySelector("#matriz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + controladorAuto + "</p>";
});
