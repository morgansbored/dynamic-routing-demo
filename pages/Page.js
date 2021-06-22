import { css, LitElement } from 'lit-element';
import { global } from './Styles';

const style = css`
  .wrapper {
    padding-left: 50px;
    padding-right: 50px;
  }

  .page-header {
    text-transform: uppercase;
  }
`;

export class Page extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [global, style];
  }
}
