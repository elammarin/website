import { LitElement, html, css } from '../../node_modules/lit-element';

class Test extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html`
            <h1>This is a Test!</h1>
        `
    }
}

customElements.define('test', Test);