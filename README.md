[![Build Status](https://travis-ci.org/advanced-rest-client/cookie-details.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/cookie-details)  

# cookie-details

`<cookie-details>` A cookie details view

### Example
```
<cookie-details></cookie-details>
```

### Styling
`<cookie-details>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--cookie-details` | Mixin applied to the element | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| delete-cookie | Fired when the user click on the "delete" action button.  This event does not bubbles. | cookie **Object** - The cookie object |
| edit-cookie | Fired when the user click on the "edit" action button.  This event does not bubbles. | cookie **Object** - The cookie object |
