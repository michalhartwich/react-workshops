import React from 'react';

import test from 'ava';
import { mount } from 'enzyme';
import sinon from 'sinon';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Counter from './Counter';

chai.use(chaiEnzyme());

const noop = () => {};
const counterSelector = '.counter';
const counterValueSelector = '.counter__value';

test('renders counter element', (t) => {
  const wrapper = mount(<Counter count={0} />);
  const counter = wrapper.find(counterSelector);
  expect(counter).to.exist;
});

test('renders counter value element', (t) => {
  const wrapper = mount(<Counter count={0} />);
  const counterValue = wrapper.find(counterValueSelector);
  expect(counterValue).to.exist;
  expect(counterValue).to.contain.text('Current count is: 0');
});
