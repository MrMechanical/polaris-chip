import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Default Title';
    this.img = 'https://picsum.photos/400/400';
    this.detailsLink = 'https://psu.edu';
    this.fancy = false; // Default fancy state
  }

  static get styles() {
    return css`
      .card {
        width: 400px;
        border: 2px solid blue;
        border-radius: 10px;
        margin: 20px;
        padding: 10px;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .details-button {
        background: blue;
        color: white;
        padding: 8px;
        text-decoration: none;
        display: none;
      }

      /* Fancy styles */
      :host([fancy]) {
        display: block; /* Ensure it behaves as a block element */
      }

      .fancy {
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        border-color: #fff;
      }

      .fancy .card-image {
        border-radius: 8px;
        border: 2px solid #fff;
      }

      .fancy h2 {
        color: white;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
      }

      .fancy .details-button {
        background: white;
        color: #ff6b6b;
      }

      /* Details styling */
      details {
        margin-top: 10px;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
        cursor: pointer;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        max-height: 100px; /* Constrain height */
        overflow: auto; /* Scroll if content overflows */
      }

      /* Responsive adjustments */
      @media (max-width: 800px) and (min-width: 500px) {
        .details-button {
          display: inline-block;
        }
      }

      @media (max-width: 500px) {
        .card {
          width: 300px;
        }
        .card-image {
          height: 150px;
        }
      }
    `;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      img: { type: String },
      detailsLink: { type: String, attribute: 'details-link' },
    };
  }

  // Event handler for details toggle
  openChanged(e) {
    this.fancy = e.target.open; // Sync fancy with details open state
  }

  render() {
    return html`
      <div class="card ${this.fancy ? 'fancy' : ''}">
        <img src="${this.img}" alt="Image" class="card-image">
        <h2>${this.title}</h2>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot></slot> <!-- Slot for flexible HTML content -->
          </div>
        </details>
        <a href="${this.detailsLink}" class="details-button">Details</a>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);