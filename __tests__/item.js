import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Item from '../src/item';

test('it works', () => {
  const tree = renderer.create(React.createElement(Item)).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('order', '0');
  expect(tree).toHaveStyleRule('flex-basis', 'auto');
  expect(tree).toHaveStyleRule('flex-grow', '0');
  expect(tree).toHaveStyleRule('flex-shrink', '1');
});

test('it works - order=1', () => {
  const tree = renderer
    .create(React.createElement(Item, { order: 1 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('order', '1');
});

test('it works - order=-1', () => {
  const tree = renderer
    .create(React.createElement(Item, { order: -1 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('order', '-1');
});

test('it works - basis=10', () => {
  const tree = renderer
    .create(React.createElement(Item, { basis: 10 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-basis', '10');
});

test('it works - basis=-10', () => {
  const tree = renderer
    .create(React.createElement(Item, { basis: -10 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-basis', '-10');
});

test('it works - grow=10', () => {
  const tree = renderer
    .create(React.createElement(Item, { grow: 10 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-grow', '10');
});

test('it works - grow=-10', () => {
  const tree = renderer
    .create(React.createElement(Item, { grow: -10 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-grow', '-10');
});

test('it works - shrink=10', () => {
  const tree = renderer
    .create(React.createElement(Item, { shrink: 10 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-shrink', '10');
});

test('it works - noShrink', () => {
  const tree = renderer
    .create(React.createElement(Item, { noShrink: true }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-shrink', '0');
});

test('it works - shrink=-10', () => {
  const tree = renderer
    .create(React.createElement(Item, { shrink: -10 }))
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-shrink', '-10');
});
