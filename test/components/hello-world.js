import { LitElement, html, css } from "../../lit/index.js";

console.log("Hola");

export class HelloWordl extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];

    render() {
        console.log("Hola");
        return html` <h1>Hello World</h1> `;
    }
}
customElements.define("hello-world", HelloWordl);
