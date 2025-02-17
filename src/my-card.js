import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    // Default values for the properties
    this.title = 'Default Title';
    this.img = 'https://picsum.photos/400/400';
    this.description = 'Default description text.';
    this.detailsLink = 'https://psu.edu';
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
      }
      
      .card-image {
        width: 100%;
        height: 200px;
      }
      
      .details-button {
        background: blue;
        color: white;
        padding: 8px;
        text-decoration: none;
        display: none;
      }
  
      /* Show Details button on medium screens */
      @media (max-width: 800px) and (min-width: 500px) {
        .details-button {
          display: inline-block;
        }
      }
  
      /* Adjust sizes on small screens */
      @media (max-width: 500px) {
        .card {
          width: 300px;
        }
        .card-image {
          height: 150px;
        }
      }
  
      /* This class toggles the background color */
      .bg-changed {
        background-color: #008000;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      description: { type: String },
      // Use attribute "details-link" to map to the detailsLink property
      detailsLink: { type: String, attribute: 'details-link' },
    };
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.img}" alt="Image" class="card-image">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <a href="${this.detailsLink}" class="details-button">Details</a>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
