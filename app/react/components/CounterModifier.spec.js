import React from 'react';

import test from 'ava';
import { mount } from 'enzyme';
import sinon from 'sinon';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Button from './Button';
import CounterModifier from './CounterModifier';

chai.use(chaiEnzyme());

const noop = () => {};
const counterModifierSelector = '.counter-modifier';
const counterModifierTitleSelector = '.counter-modifier__title';

test('renders it\'s own element', (t) => {
  const wrapper = mount(
    <CounterModifier
      increaseCount={noop}
      decreaseCount={noop}
    />
  );
  const counterModifier = wrapper.find(counterModifierSelector);
  expect(counterModifier).to.exist;
});

test('renders it\'s title', (t) => {
  const wrapper = mount(
    <CounterModifier
      increaseCount={noop}
      decreaseCount={noop}
    />
  );
  const counterModifier = wrapper.find(counterModifierSelector);
  const counterModifierTitle = wrapper.find(counterModifierTitleSelector);
  expect(counterModifierTitle).to.exist;
});

test('renders exactly two buttons', (t) => {
  const wrapper = mount(
    <CounterModifier
      increaseCount={noop}
      decreaseCount={noop}
    />
  );
  const counterModifier = wrapper.find(counterModifierSelector);
  expect(counterModifier).to.have.exactly(2).descendants(Button);
});

test('passes correct callbacks to buttons', (t) => {
  const buttonCallback = sinon.spy();
  const wrapper = mount(
    <CounterModifier
      increaseCount={buttonCallback}
      decreaseCount={buttonCallback}
    />
  );

  wrapper.find('button').forEach(e => e.simulate('click'));
  expect(buttonCallback.calledTwice).to.be.true;
});
