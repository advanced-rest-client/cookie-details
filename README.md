[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/cookie-details.svg)](https://www.npmjs.com/package/@advanced-rest-client/cookie-details)

[![Build Status](https://travis-ci.org/advanced-rest-client/cookie-details.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/cookie-details)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/cookie-details)

An element to render cookie object details.

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

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@advanced-rest-client/cookie-details/cookie-details.js';

class SampleElement extends PolymerElement {
  render() {
    return html`
    <cookie-details
      .cookie="${this.cookie}"
      @delete="${this._cookieDeleteHandler}"
      @edit="${this._cookieEditHandler}"></cookie-details>
    `;
  }

  _cookieDeleteHandler(e) {
    ...
  }

  _cookieEditHandler(e) {
    ...
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/cookie-details
cd cookie-details
npm install
```


### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)
