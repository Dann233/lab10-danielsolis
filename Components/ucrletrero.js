import styles from "../styles/ucrletrero.css" with { type: "css" };
const DEFAULT_TITULO = "Letrero UCR";
const DEFAULT_FILAS  = [];
const DEFAULT_LOGO   = "";

class UcrLetrero extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });            
    this.shadowRoot.adoptedStyleSheets.push(styles); 
  }

  connectedCallback() {
    this.titulo = this.getAttribute("titulo") ?? DEFAULT_TITULO;
    this.filas  = this.getAttribute("filas")?.split("|").map(f => f.trim()).filter(Boolean) ?? DEFAULT_FILAS;
    this.logo   = this.getAttribute("logo") ?? DEFAULT_LOGO;
    this.render();
  }

  #buildFilas() {
    return this.filas.map((texto, i) => /* html */`
      <div class="fila" part="fila" style="animation-delay: ${0.2 + i * 0.2}s">
        <p>${texto}</p>
        <span class="flecha" part="flecha">→</span>
      </div>
    `).join("");
  }

  render() {
    this.shadowRoot.setHTMLUnsafe(/* html */`

      <!-- Slot nombrado: el título lo pone el dev desde afuera -->
      <slot name="titulo"></slot>

      <!-- part="cartel" → estilable desde fuera con ::part(cartel) -->
      <div class="cartel" part="cartel">

        ${this.#buildFilas()}

        <div class="pie" part="pie" style="animation-delay: ${0.2 + this.filas.length * 0.2}s">
          <img part="logo" src="${this.logo}" alt="${this.titulo}">
        </div>

      </div>
    `);
  }
}

customElements.define("ucr-letrero", UcrLetrero);