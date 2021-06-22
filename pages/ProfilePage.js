import { html } from "lit-element";
import { Page } from './Page';

export class ProfilePage extends Page {
  constructor() {
    super();
  }

  static get tag() {
    return 'w-page-profile';
  }

  render() {
    return html`
      <div class="wrapper">
        <h1 class="page-header">Profile</h1>
        <p>
          Profile for user ${sessionStorage.getItem('username')}
        </p>
      </div>
    `;
  }

}

window.customElements.define("w-page-profile", ProfilePage);