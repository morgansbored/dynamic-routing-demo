import { html, css } from "lit-element";
import { Page } from './Page';

export class Login extends Page {
  constructor() {
    super();
  }

  static get tag() {
    return 'w-page-login';
  }

  static get styles() {
    return [super.styles, css`
        fieldset {
          display: flex;
          flex-direction: column;
          border: 0;
        }

        input, button {
          border: 2px solid #ccc;
          border-radius: 10px;
          padding: 10px;
        }

    `];
  }

  _login() {
    sessionStorage.setItem("username", this.shadowRoot.querySelector('#username-input').value);
    history.replaceState(null, "", "/home");    
	}

  render() {
    return html`
      <div class="wrapper">
        <h1 class="page-header">Welcome</h1>
        <p>
            This is a bare-bones example of dynamic routing using <b>router-slot</b> and <b>litElement</b>.
        </p>
        <p>
            The source files can be found here.
        </p>
        <p>
            Please enter a username and password to get started.
        </p>
        <form id="login-form">
          <fieldset>
          <p>
            <label for="username-input">username:</label>
            <input id="username-input" type="text" autocomplete="off">
          </p>
          <p>
            <label for="password-input">password:</label>
            <input id="password-input" type="password" autocomplete="off">
          </p>
          </fieldset>
          <p>
            <button @click=${this._login}>Log in</button>
          </p>
        </form>
    </div>
    `;
  }

}

window.customElements.define("w-page-login", Login);