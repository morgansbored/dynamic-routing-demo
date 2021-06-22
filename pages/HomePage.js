import { html } from "lit-element";
import { Page } from './Page';

export class HomePage extends Page {
  constructor() {
    super();
  }

  static get tag() {
    return 'w-page-home';
  }

  render() {
    return html`
      <div class="wrapper">
        <h1 class="page-header">Home</h1>
        <p>
          Welcome, ${sessionStorage.getItem('username')}. This is a landing page.
        </p>
      </div>
    `;
  }

}

window.customElements.define("w-page-home", HomePage);