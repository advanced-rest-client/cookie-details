import { fixture, assert, html } from '@open-wc/testing';
import * as MockInteractions from '@polymer/iron-test-helpers/mock-interactions.js';
import { DataGenerator } from '@advanced-rest-client/arc-data-generator/arc-data-generator.js';
import '../cookie-details.js';

describe('<cookie-details>', function() {
  async function basicFixture(cookie) {
    return (await fixture(html`<cookie-details
      .cookie="${cookie}"></cookie-details>`));
  }

  let cookie;
  before(function() {
    const data = DataGenerator.generateCookiesData({
      size: 1
    });
    data.httpOnly = true;
    data.secure = true;
    data.session = true;
    cookie = data[0];
  });

  it('Fires delete event', async () => {
    const element = await basicFixture(cookie);
    let eventData;
    element.addEventListener('delete', function(e) {
      eventData = e.detail;
      assert.isFalse(e.bubbles);
    });
    const node = element.shadowRoot.querySelector('[data-action="delete-action"]');
    MockInteractions.tap(node);
    assert.typeOf(eventData, 'object');
    assert.deepEqual(eventData.cookie, cookie);
  });

  it('Fires edit event', async () =>  {
    const element = await basicFixture(cookie);
    let eventData;
    element.addEventListener('edit', function(e) {
      eventData = e.detail;
      assert.isFalse(e.bubbles);
    });
    const node = element.shadowRoot.querySelector('[data-action="edit-action"]');
    MockInteractions.tap(node);
    assert.typeOf(eventData, 'object');
    assert.deepEqual(eventData.cookie, cookie);
  });

  it('can be initialized without a cookie', async () =>  {
    await basicFixture();
  });
});
