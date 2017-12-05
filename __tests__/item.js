import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Item from '../src/item';

test('it works order - 2', () => {
  const tree = renderer.create(<Item order="2" />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('order', '2');
});

test('it works order - 3', () => {
  const tree = renderer.create(<Item order="3" />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('order', '3');
});

test('it works basis', () => {
  const tree = renderer.create(<Item basis="30%" />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-basis', '30%');
});

test('it works grow', () => {
  const tree = renderer.create(<Item grow />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-grow', '1');
});

test('it works shrink', () => {
  const tree = renderer.create(<Item shrink />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-shrink', '1');
});

test('it works noShrink', () => {
  const tree = renderer.create(<Item noShrink />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-shrink', '0');
});
