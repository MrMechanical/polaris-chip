import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get tag() {
    return 'polaris-chip';
  }

  constructor() {
    super();
    this.title = 'Chip Default';
    this.link = '#';
    this.fancy = false; // Added fancy property
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      span {
        background-color: orange;
        color: black;
        font-size: 24px;
        padding: 16px;
        margin: 8px;
        text-decoration: none; /* Added for better link styling */
        border-radius: 4px; /* Added for chip-like appearance */
        transition: all 0.3s ease; /* Smooth transitions */
      }

      span:hover {
        background-color: grey;
        border: 1px solid black;
      }

      /* Fancy mode styles */
      .fancy {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
       	color: white;
        border: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        padding: 20px; /* Slightly larger */
      }

      .fancy:hover {
        background: linear-gradient(45deg, #4ecdc4, #ff6b6b); /* Reverse gradient */
        transform: translateY(-2px); /* Slight lift effect */
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true } // Added fancy property
    };
  }

  render() {
    return html`
      <a href="${this.link}">
        <span class="${this.fancy ? 'fancy' : ''}">${this.title}</span>
      </a>
    `;
  }
}

globalThis.customElements.define(PolarisChip.tag, PolarisChip);