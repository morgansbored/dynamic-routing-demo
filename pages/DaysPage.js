import { html } from "lit-element";
import { Page } from './Page';

export class DaysPage extends Page {
  constructor() {
    super();
  }

  static get tag() {
    return 'w-page-days';
  }

  render() {
    return html`
      <div class="wrapper">
        <h1 class="page-header">Days Of The Week</h1>
        <p>
          The below links demonstrate dynamic routing, working from one Day.js file.
        </p>
        <p><a href="/days/Monday">Monday</a></p>
        <p><a href="/days/Tuesday">Tuesday</a></p>
        <p><a href="/days/Wednesday">Wednesday</a></p>
        <p><a href="/days/Thursday">Thursday</a></p>
        <p><a href="/days/Friday">Friday</a></p>
        <p><a href="/days/Saturday">Saturday</a></p>
        <p><a href="/days/Sunday">Sunday</a></p>
    </div>
    `;
  }

}

window.customElements.define("w-page-days", DaysPage);