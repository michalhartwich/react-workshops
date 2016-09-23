import React from 'react';

import test from 'ava';
import { mount } from 'enzyme';
import sinon from 'sinon';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Button from './Button';

chai.use(chaiEnzyme());

const noop = () => {};
const buttonSelector = 'button';

test('renders button element', (t) => {
  const wrapper = mount(<Button onClick={noop} />);
  const button = wrapper.find(buttonSelector);
  expect(button).to.exist;
});

test('renders passed children', (t) => {
  const innerText = 'INSIDE_TEXT';
  const wrapper = mount(<Button onClick={noop}>{innerText}</Button>);
  const button = wrapper.find(buttonSelector);
  expect(button).to.contain.text(innerText);
});

test('invokes passed callback', (t) => {
  const onClick = sinon.spy();
  const wrapper = mount(<Button onClick={onClick} />);
  wrapper.find(buttonSelector).simulate('click');
  expect(onClick.calledOnce).to.be.true;
});
