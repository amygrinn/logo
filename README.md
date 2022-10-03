# This package has moved to [@taylorgrinn/logo](https://github.com/taylorgrinn/logo)

# Tygr Logo

[Demo](https://tylergrinn.github.io/tygr-logo)

[Forking Guide](https://github.com/tylergrinn/tygr-logo/blob/main/docs/forking.md)

This is a react component packaged for three environments: node,
browser, and standalone.

- Node is reccommended. If you are already using react in the project,
  this library simply exports a react component function you can use
  directly in jsx.

- Browser is for fast prototyping in the browser. You can add this
  component via a script tag. The react and react-dom script tags must
  be placed before the component script.

- Standalone is for projects that do not use react. It exposes the
  `mount` function, which takes an HTML element.

## Node

Installation:

```cmd
npm i --save @taylorgrinn/logo
```

Usage (jsx):

```jsx
import Logo from '@taylorgrinn/logo';

// Import styles. Make sure there is a style loader specified in your
// webpack config
import '@taylorgrinn/logo/lib/tay-logo.min.css';

export default function MyComponent() {
  return (
    <div>
      <h1>Logo usage example</h1>
      <Logo />
    </div>
  );
}
```

## Browser

Usage:

When included via script tag, the component is exposed as a window library named 'TayLogo'

```html
<html>
  <head>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="https://taylorgrinn.github.io/logo/lib/tay-logo.min.js"></script>
    <link
      rel="stylesheet"
      href="https://taylorgrinn.github.io/logo/lib/tay-logo.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      ReactDOM.render(<TayLogo />, document.getElementById('app'));
    </script>
  </body>
</html>
```

## Standalone

Installation:

```cmd
npm i --save @taylorgrinn/logo
```

Usage:

```jsx

// Vanilla JS
import Logo from '@taylorgrinn/logo/lib/standalone';

const el = document.getElementById('tay-logo');

Logo.mount(el);

// Vue
<template>
<div>
  <div ref="tay-logo"></div>
</div>
</template>

<script>
import Logo from '@taylorgrinn/logo/lib/standalone';

export default {
  mounted() {
    Logo.mount(this.$refs['tay-logo']);
  },
};
</script>

// Angular Typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import Logo from '@taylorgrinn/logo/lib/standalone';

@Component({
  selector: 'app-root',
  template: '<div><div #tay-logo></div></div>',
})
export class LogoComponent  {
  @ViewChild('tay-logo') el: ElementRef;

  ngAfterViewInit() {
    Logo.mount(this.el.nativeElement);
  }
}
```

You should not use the standalone version if you have multiple react
components in your project.

## Customizing styles

Sass variables can be overridden if you accept responsibility for
transpiling it into css. You can see an example of this setup in the
`demo/webpack.config.js` configuration named `sass`.

Make sure to reassign any sass variables before importing the `sass`
library:

```scss
$accent-1: white;
$accent-2: yellow;

@import '@taylorgrinn/logo/sass';
```
