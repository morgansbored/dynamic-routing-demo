import { css, html } from "lit-element";
import { Page } from './Page';

export class ResourcesPage extends Page {
  constructor() {
    super();
  }

  static get tag() {
    return 'w-page-resources';
  }

  render() {
    return html`
      <div class="wrapper">
        <h1 class="page-header">Resources</h1>
        <p>
            This is a resources page.
        </p>
      </div>
    `;
  }

}

window.customElements.define("w-page-resources", ResourcesPage);