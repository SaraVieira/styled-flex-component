# Styled Flex Component

[![Codecov](https://codecov.io/gh/SaraVieira/styled-flex-component/branch/master/graph/badge.svg)](https://codecov.io/gh/SaraVieira/styled-flex-component) [![Build Status](https://travis-ci.org/SaraVieira/styled-flex-component.svg)](https://travis-ci.org/SaraVieira/styled-flex-component)

Flex Element for not writing any more custom flex styles because fuck that

## Install

```
yarn add styled-flex-component
or
npm i styled-flex-component
```

## Usage

```jsx
import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';

export default () => (
  <Flex center full>
    <FlexItem order="2">World</FlexItem>
    <FlexItem order="1">Hello</FlexItem>
  </Flex>
);
```

## Props

All props without description are just true or false values and take no arguments

### Flex Container

#### General

* full -> Sets width, height and flex basis to 100%
* inline -> Sets the item to inline-flex
* center -> Sets justify-content and align-items to center

#### Direction

* rowReverse
* column
* columnReverse

#### Wrap

* wrap
* wrapReverse

#### Align Items

* alignCenter
* alignStart
* alignEnd
* alignBaseline
* alignStretch
* alignCenter

#### Align Content

* contentCenter
* contentStart
* contentEnd
* contentBaseline
* contentStretch
* contentAround
* contentStretch

#### Justify Content

* justifyCenter
* justifyStart
* justifyEnd
* justifyBetween
* justifyAround
* justifyEvenly

### Flex Item

* Order -> Takes a number to se the order of that item
* basis -> Takes a number to se the flex-basis of that item
* grow
* shrink
* noShrink

# License

MIT
