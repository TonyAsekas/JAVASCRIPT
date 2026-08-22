import "./style.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

//Indico al documento, que cuando todo el contenido del DOM esté cargado, me inyecte este HTML
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  ${Header()}
  ${Footer()}
`;
});