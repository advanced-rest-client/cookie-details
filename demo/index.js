import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@anypoint-web-components/anypoint-styles/colors.js';
import { DataGenerator } from '@advanced-rest-client/arc-data-generator/arc-data-generator.js';
import '../cookie-details.js';

class ApiDemo extends ArcDemoPage {
  constructor() {
    super();

    this.initObservableProperties([
      'cookie'
    ]);

    this.cookie = DataGenerator.generateCookiesData({
      size: 1
    })[0];

    this.componentName = 'cookie-details';
  }

  _demoTemplate() {
    const {
      cookie
    } = this;

    return html`<section class="documentation-section">
      <h2>Interactive demo</h2>
      <p>
        This demo lets you preview the Cookie details element with various
        configuration options.
      </p>

      <cookie-details
        .cookie="${cookie}"
        @save="${this._saveCookieHandler}"></cookie-details>
    </section>`;
  }

  contentTemplate() {
    return html`
      ${this._demoTemplate()}
    `;
  }
}
const instance = new ApiDemo();
instance.render();
window.demoInstance = instance;
