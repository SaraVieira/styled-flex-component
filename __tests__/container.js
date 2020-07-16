import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Flex from '../src/flex';

test('it works', () => {
  const tree = renderer.create(React.createElement(Flex)).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-direction', 'row');
  expect(tree).toHaveStyleRule('flex-wrap', 'nowrap');
  expect(tree).toHaveStyleRule('justify-content', 'flex-start');
  expect(tree).toHaveStyleRule('align-content', 'stretch');
});

test('it works - inline', () => {
  const tree = renderer
    .create(React.createElement(Flex, { inline: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-flex');
});

test('it works - row', () => {
  const tree = renderer
    .create(React.createElement(Flex, { row: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'row');
});

test('it works - rowReverse', () => {
  const tree = renderer
    .create(React.createElement(Flex, { rowReverse: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'row-reverse');
});

test('it works - column', () => {
  const tree = renderer
    .create(React.createElement(Flex, { column: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'column');
});

test('it works - columnReverse', () => {
  const tree = renderer
    .create(React.createElement(Flex, { columnReverse: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'column-reverse');
});

test('it works - nowrap', () => {
  const tree = renderer
    .create(React.createElement(Flex, { nowrap: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-wrap', 'nowrap');
});

test('it works - wrap', () => {
  const tree = renderer
    .create(React.createElement(Flex, { wrap: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
});

test('it works - wrapReverse', () => {
  const tree = renderer
    .create(React.createElement(Flex, { wrapReverse: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap-reverse');
});

test('it works - justifyStart', () => {
  const tree = renderer
    .create(React.createElement(Flex, { justifyStart: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'flex-start');
});

test('it works - justifyEnd', () => {
  const tree = renderer
    .create(React.createElement(Flex, { justifyEnd: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'flex-end');
});

test('it works - justifyCenter', () => {
  const tree = renderer
    .create(React.createElement(Flex, { justifyCenter: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'center');
});

test('it works - justifyBetween', () => {
  const tree = renderer
    .create(React.createElement(Flex, { justifyBetween: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'space-between');
});

test('it works - justifyAround', () => {
  const tree = renderer
    .create(React.createElement(Flex, { justifyAround: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'space-around');
});

test('it works - justifyEvenly', () => {
  const tree = renderer
    .create(React.createElement(Flex, { justifyEvenly: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'space-evenly');
});

test('it works - contentStart', () => {
  const tree = renderer
    .create(React.createElement(Flex, { contentStart: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-start');
});

test('it works - contentEnd', () => {
  const tree = renderer
    .create(React.createElement(Flex, { contentEnd: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-end');
});

test('it works - contentCenter', () => {
  const tree = renderer
    .create(React.createElement(Flex, { contentCenter: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'center');
});

test('it works - contentSpaceBetween', () => {
  const tree = renderer
    .create(React.createElement(Flex, { contentSpaceBetween: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'space-between');
});

test('it works - contentSpaceAround', () => {
  const tree = renderer
    .create(React.createElement(Flex, { contentSpaceAround: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'space-around');
});

test('it works - contentStretch', () => {
  const tree = renderer
    .create(React.createElement(Flex, { contentStretch: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'stretch');
});

test('it works - alignStart', () => {
  const tree = renderer
    .create(React.createElement(Flex, { alignStart: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'flex-start');
});

test('it works - alignEnd', () => {
  const tree = renderer
    .create(React.createElement(Flex, { alignEnd: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'flex-end');
});

test('it works - alignCenter', () => {
  const tree = renderer
    .create(React.createElement(Flex, { alignCenter: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'center');
});

test('it works - alignBaseline', () => {
  const tree = renderer
    .create(React.createElement(Flex, { alignBaseline: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'baseline');
});

test('it works - alignStretch', () => {
  const tree = renderer
    .create(React.createElement(Flex, { alignStretch: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'stretch');
});

test('it works - full', () => {
  const tree = renderer
    .create(React.createElement(Flex, { full: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('height', '100%');
  expect(tree).toHaveStyleRule('flex-basis', '100%');
});

test('it works - center', () => {
  const tree = renderer
    .create(React.createElement(Flex, { center: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'center');
});
