# Sam Design Kit (SDK)

Documentation for SDK: https://sam-design-kit.vercel.app

## Installation

#### Using npm:

```
npm install sam-design-kit
```

Once installed, ensure that your project is configured with the correct dependencies, especially if you're using other libraries like React and styled-components.

#### Peer dependencies

To ensure compatibility with your project, you must have the following peer dependencies installed

 - <strong>React</strong> (version ^18.x)
 - <strong>React DOM</strong> (version ^18.x)
 - <strong>styled-components</strong> (version ^6.1.8 or above)

If you don't have these installed, run:

```
npm install react react-dom styled-components
```

## Basic usage

Once the library is installed, you can import and use the components in your project. Here’s an example of how to use a component:

```
import React from 'react';
import { Button, Text } from 'sam-design-kit';

const App = () => (
  <div>
    <Button>
        <Text variant="body-1-regular">Click me</Text>
    </Button>
  </div>
);

export default App;
```

## Basic usage

This package is built with Rollup, and it supports both CommonJS (cjs) and ES Modules (esm) out of the box. Depending on your project's module resolution, the appropriate version will be loaded:

 - CommonJS: `dist/cjs/index.js`
 - ES Module: `dist/esm/bundle.js`
 - TypeScript Definitions: `dist/index.d.ts`