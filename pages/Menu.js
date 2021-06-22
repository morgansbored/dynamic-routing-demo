import { html, css, LitElement } from "lit-element";
import { global } from './Styles';


const style = css`
    * {
        margin: 0;
        padding: 0;
    }
    
    ul {
        overflow: auto;
        list-style-type: none;
        padding: 20px;
        float: right;
    }
    
    li {
        height: 25px;
        margin-left: 0px;
        border-left: 1px solid #aaa;
        padding: 0 20px;
        float: left;
        color: #ccc;
        text-transform: uppercase;
    }
    
    li:last-child {
        border-right: none;
    }
    
    li a {
        text-decoration: none;
        color: #ccc;
        text-transform: uppercase;    
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
        cursor: pointer;
    }
    
    li a:hover {
        color: #666;
    }
    
    li.active a {
        font-weight: bold;
        color: #333;
    }
    `;

export class Menu extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return [global, style];
    }

    _logout() {
    sessionStorage.clear();
    history.replaceState(null, "", "login");
	}


    render() {
        if (sessionStorage.getItem("username") == null) {
            //logged out
            return html`
                <nav role="navigation">
                    <ul>
                    <li>You are logged out</li>
                    </ul>
                </nav>
            `;
        }
        else {
            //logged in
            return html`
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/days">Days</a></li>
                        <li><a href="/resources">Resources</a></li>
                        <li><a href="/help">Help</a></li>
                        <li><a @click=${this._logout}>Log out</a></li>
                    </ul>
                </nav>
            `;
        }
    }
}
