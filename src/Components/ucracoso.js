import styles from "./UcrAcoso.css" with { type: "css" };

const DEFAULT_TITULO  = "¡La sede te acompaña!";
const DEFAULT_MENSAJE = "";
const DEFAULT_QR      = "";
const DEFAULT_FOTO1   = "";
const DEFAULT_FOTO2   = "";
const DEFAULT_LOGO    = "";
const DEFAULT_SEDE    = "Sede de Guanacaste";

class UcrAcoso extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });            
    this.shadowRoot.adoptedStyleSheets.push(styles); 
  }

  connectedCallback() {
    this.titulo  = this.getAttribute("titulo")  ?? DEFAULT_TITULO;
    this.mensaje = this.getAttribute("mensaje") ?? DEFAULT_MENSAJE;
    this.qr      = this.getAttribute("qr")      ?? DEFAULT_QR;
    this.foto1   = this.getAttribute("foto1")   ?? DEFAULT_FOTO1;
    this.foto2   = this.getAttribute("foto2")   ?? DEFAULT_FOTO2;
    this.logo    = this.getAttribute("logo")    ?? DEFAULT_LOGO;
    this.sede    = this.getAttribute("sede")    ?? DEFAULT_SEDE;
    this.render();
  }

  render() {
    this.shadowRoot.setHTMLUnsafe(/* html */`

      <!-- part="cartel" → estilable desde fuera con ::part(cartel) -->
      <div class="cartel" part="cartel">

        <!-- Slot nombrado: el título lo pone el dev desde afuera -->
        <slot name="titulo"></slot>

        <!-- Slot nombrado: el mensaje lo pone el dev desde afuera -->
        <slot name="mensaje"></slot>

        <div class="qr" part="qr">
          <p>Si necesitas ayuda, escanea este QR</p>
          <img part="qr-img" src="${this.qr}" alt="Código QR">
        </div>

        <div class="fotos" part="fotos">
          <img part="foto1" src="${this.foto1}" alt="Estudiante 1">
          <img part="foto2" src="${this.foto2}" alt="Estudiante 2">
        </div>

        <div class="logos" part="logos">
          <img part="logo" src="${this.logo}" alt="UCR">
          <div class="separador"></div>
          <div class="sede-info">
            <span class="sg">SG</span>
            <span>${this.sede}</span>
          </div>
        </div>

      </div>
    `);
  }
}

customElements.define("ucr-acoso", UcrAcoso);