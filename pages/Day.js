import { html } from "lit-element";
import { Page } from './Page';

export class Day extends Page {
  constructor() {
    super();
    this.day = null;
  }

  static get properties() {
    return {
      day: { type: String },
    };
  }

  static get tag() {
    return 'w-page-progress-days';
  }

  render() {
    return html`
      <div class="wrapper">
        <h1 class="page-header">${this.day}</h1>
        <p>
          This is a day page.
        </p>
        <p>
          <a href="/days">Back to Days Page</a>
        </p>
      </div>
    `;
  }
  
}

window.customElements.define("w-page-progress-days", Day);