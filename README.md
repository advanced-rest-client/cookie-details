[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/cookie-details.svg)](https://www.npmjs.com/package/@advanced-rest-client/cookie-details)

[![Build Status](https://travis-ci.org/advanced-rest-client/cookie-details.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/cookie-details)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/cookie-details)

An element to render cookie object details.

### Example

```html
<cookie-details></cookie-details>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/cookie-details
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import './node_modules/@advanced-rest-client/cookie-details/cookie-details.js';
    </script>
  </head>
  <body>
    <cookie-details></cookie-details>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from './node_modules/@polymer/polymer';
import './node_modules/@advanced-rest-client/cookie-details/cookie-details.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <cookie-details></cookie-details>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/cookie-details
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
