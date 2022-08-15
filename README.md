# AW_LITELEMENT

`aw_litelement` es una adapatación de la biblioteca Lit Element para poder usar componentes creados por vosotros mismos sin necesidad de crear un sitio entero basado en Lit Element. En esencia lo que consigue esta biblioteca es poder usar Lit Element de manera sencilla y eficaz en cualquier página web personalizada o realizada en Wordpress añadiendo solo unas pocas líneas de código. Una especia de lit-element mejorado ya que puedes aprovechar el máximo potencial de Lit Element al crear componentes web con unos recursos totalmente optimizados para la web.

## Instalación

```
$ npm i aw_litelement
```

## Uso de aw_litelement

Añadir componentes personalizados es muy sencillo, tan solo tienes que crear un componente web de Polymer como puedes ver en la propia documentación de <a href="https://lit.dev/docs/" target="_blank">Lit</a> variando únicamente las rutas de los imports en el archivo javascript:

<span style="font-size:12px">../components/test-component.js</span>


```javascript
import { LitElement, html, css } from "/node_modules/aw_litelement/lit/index.js";

export class TestComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();

    this.name = "NO NAME";
  }

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      this.name = "John";
    }, 5000);
  }

  render() {
    return html`Este es mi primer componente, enhorabuena ${this.name}`;
  }
}
customElements.define("test-component", TestComponent);
```

<span style="font-size:12px">../js/index.js</span>

```javascript
import "../components/test-component.js";

console.log("Done");
```

<span style="font-size:12px">index.html</span>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lit Element</title>
  </head>
  <body>
    <test-component name="Manu"></test-component>
  </body>
  <script type="module" src="./js/index.js"></script>
</html>

```

Como se observa en el ejemplo anterior la creación de un componente personalizado y su inclusión en un sitio web creado de forma personalizada o incluso con algún CMS es extremadamente sencilla.
















<p style="text-align: center; padding: 50px 0">
	Nuestro más sincero agradecimiento al equipo de Lit ELement por crear esta fantástica biblioteca.<br><br>
	<a href="https://lit.dev/">Lit Element</a>
</p>

<p style="text-align: center; padding: 50px 0">
    <b>Contacto</b><br><br>Manu J. Overa<br><a href="mailto:manu.giralda@gmail.com">manu.giralda@gmail.com</a><br><br>
    <!-- Diseño Web - <a href="https://arismanwebs.es">Arisman Webs</a> -->
</p>



