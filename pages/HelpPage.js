import { html } from "lit-element";
import { Page } from './Page';

export class HelpPage extends Page {
  constructor() {
    super();
  }

  static get tag() {
    return 'w-page-help';
  }

  render() {
    return html`
      <div class="wrapper">
        <h1 class="page-header">Help</h1>
        <p>
            This is a help page.
        </p>
      </div>
    `;
  }

}

window.customElements.define("w-page-help", HelpPage);