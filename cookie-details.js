/**
@license
Copyright 2016 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import { html, css, LitElement } from 'lit-element';
import { ArcResizableMixin } from '@advanced-rest-client/arc-resizable-mixin/arc-resizable-mixin.js';
import '@advanced-rest-client/date-time/date-time.js';
import '@advanced-rest-client/arc-icons/arc-icons.js';
import '@anypoint-web-components/anypoint-button/anypoint-button.js';
import '@polymer/iron-icon/iron-icon.js';
/**
 * A cookie details view.
 *
 * @customElement
 * @demo demo/index.html
 * @memberof UiElements
 * @polymerBehavior IronResizableBehavior
 */
class CookieDetails extends ArcResizableMixin(LitElement) {
  static get styles() {
    return css`:host {
      display: block;
      font-size: var(--arc-font-body1-font-size);
      font-weight: var(--arc-font-body1-font-weight);
      line-height: var(--arc-font-body1-line-height);
    }

    h2 {
      font-size: var(--arc-font-headline-font-size);
      font-weight: var(--arc-font-headline-font-weight);
      letter-spacing: var(--arc-font-headline-letter-spacing);
      line-height: var(--arc-font-headline-line-height);
    }

    .lh {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
    }

    .meta-row {
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      color: var(--cookie-details-meta-color, rgba(0, 0, 0, 0.87));
      height: 40px;
    }

    .meta-row .label {
      width: 160px;
      display: inline-block;
    }

    .meta-row .value {
      display: inline-block;
      white-space: var(--arc-font-nowrap-white-space);
      overflow: var(--arc-font-nowrap-overflow);
      text-overflow: var(--arc-font-nowrap-text-overflow);
    }

    .actions {
      -ms-flex-pack: end;
      -webkit-justify-content: flex-end;
      justify-content: flex-end;
      margin-top: 20px;
    }

    .actions anypoint-button {
      padding-left: 12px;
      padding-right: 12px;
    }

    anypoint-button iron-icon {
      margin-right: 12px;
    }`;
  }

  render() {
    const cookie = this.cookie || {};
    return html`
    <h2>${cookie.name}</h2>
    <div class="meta-row lh">
      <span class="label">Value</span>
      <span class="value">${cookie.value}</span>
    </div>
    <div class="meta-row lh">
      <span class="label">Domain</span>
      <span class="value">${cookie.domain}</span>
    </div>
    <div class="meta-row lh">
      <span class="label">Path</span>
      <span class="value">${cookie.path}</span>
    </div>
    <div class="meta-row lh">
      <span class="label">Expires</span>
      <span class="value">
        <date-time
          date="${cookie.expires}"
          year="numeric"
          month="numeric"
          day="numeric"
          hour="numeric"
          minute="numeric"></date-time>
      </span>
    </div>
    <div class="meta-row lh">
      <span class="label">Host only</span>
      <span class="value">${cookie.hostOnly}</span>
    </div>
    <div class="meta-row lh">
      <span class="label">HTTP only</span>
      <span class="value">${cookie.httpOnly}</span>
    </div>
    <div class="meta-row lh">
      <span class="label">Secure</span>
      <span class="value">${cookie.secure}</span>
    </div>
    <div class="meta-row lh">
      <span class="label">Session</span>
      <span class="value">${cookie.session}</span>
    </div>
    <div class="actions lh">
      <anypoint-button @click="${this._deleteCookie}" data-action="delete-action">
        <iron-icon icon="arc:delete"></iron-icon>
        Delete
      </anypoint-button>
      <anypoint-button raised="" @click="${this._editCookie}" data-action="edit-action">
        <iron-icon icon="arc:edit"></iron-icon>
        Edit
      </anypoint-button>
    </div>`;
  }

  static get properties() {
    return {
      // A cookie to render
      cookie: Object
    };
  }

  /**
   * Sends non-bubbling `delete-cookie` event to the parent element to perform
   * delete action.
   */
  _deleteCookie() {
    const ev = new CustomEvent('delete', {
      detail: {
        cookie: this.cookie
      },
      cancelable: true,
      bubbles: false,
      composed: false
    });
    this.dispatchEvent(ev);
  }
  /**
   * Sends non-bubbling `edit-cookie` event to the parent element to perform
   * edit action.
   */
  _editCookie() {
    const ev = new CustomEvent('edit', {
      detail: {
        cookie: this.cookie
      },
      cancelable: true,
      bubbles: false,
      composed: false
    });
    this.dispatchEvent(ev);
  }
  /**
   * Fired when the user click on the "edit" action button.
   *
   * This event does not bubbles.
   *
   * @event edit-cookie
   * @param {Object} cookie The cookie object
   */
  /**
   * Fired when the user click on the "delete" action button.
   *
   * This event does not bubbles.
   *
   * @event delete-cookie
   * @param {Object} cookie The cookie object
   */
}
window.customElements.define('cookie-details', CookieDetails);
