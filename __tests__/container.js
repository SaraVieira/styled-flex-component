import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Flex from '../src/flex';

test('it works', () => {
  const tree = renderer.create(<Flex />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
});

test('it works - rowReverse', () => {
  const tree = renderer.create(<Flex rowReverse />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'row-reverse');
});

test('it works - column', () => {
  const tree = renderer.create(<Flex column />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'column');
});

test('it works - columnReverse', () => {
  const tree = renderer.create(<Flex columnReverse />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'column-reverse');
});

test('it works - wrapReverse', () => {
  const tree = renderer.create(<Flex wrapReverse />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap-reverse');
});

test('it works - wrap', () => {
  const tree = renderer.create(<Flex wrap />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
});

test('it works - alignCenter', () => {
  const tree = renderer.create(<Flex alignCenter />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'center');
});

test('it works - alignStart', () => {
  const tree = renderer.create(<Flex alignStart />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'flex-start');
});

test('it works - alignEnd', () => {
  const tree = renderer.create(<Flex alignEnd />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'flex-end');
});

test('it works - alignBaseline', () => {
  const tree = renderer.create(<Flex alignBaseline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'baseline');
});

test('it works - alignStretch', () => {
  const tree = renderer.create(<Flex alignStretch />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'stretch');
});

test('it works - inline', () => {
  const tree = renderer.create(<Flex inline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-flex');
});

test('it works - contentCenter', () => {
  const tree = renderer.create(<Flex contentCenter />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'center');
});

test('it works - contentStart', () => {
  const tree = renderer.create(<Flex contentStart />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-start');
});

test('it works - contentEnd', () => {
  const tree = renderer.create(<Flex contentEnd />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'flex-end');
});

test('it works - contentBaseline', () => {
  const tree = renderer.create(<Flex contentBaseline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'baseline');
});

test('it works - alignStart', () => {
  const tree = renderer.create(<Flex alignStart />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'flex-start');
});

test('it works - contentStretch', () => {
  const tree = renderer.create(<Flex contentStretch />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'stretch');
});

test('it works - contentAround', () => {
  const tree = renderer.create(<Flex contentAround />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-content', 'around');
});

test('it works - full', () => {
  const tree = renderer.create(<Flex full />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('height', '100%');
  expect(tree).toHaveStyleRule('flex-basis', '100%');
});

test('it works - center', () => {
  const tree = renderer.create(<Flex center />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'center');
});

test('it works - justifyCenter', () => {
  const tree = renderer.create(<Flex justifyCenter />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'center');
});

test('it works - justifyStart', () => {
  const tree = renderer.create(<Flex justifyStart />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'flex-start');
});

test('it works - justifyEnd', () => {
  const tree = renderer.create(<Flex justifyEnd />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'flex-end');
});

test('it works - justifyBetween', () => {
  const tree = renderer.create(<Flex justifyBetween />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'space-between');
});

test('it works - justifyAround', () => {
  const tree = renderer.create(<Flex justifyAround />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'space-around');
});

test('it works - justifyEvenly', () => {
  const tree = renderer.create(<Flex justifyEvenly />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('justify-content', 'space-evenly');
});
