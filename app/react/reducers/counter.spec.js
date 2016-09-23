import React from 'react';
import test from 'ava';
import chai, { expect } from 'chai';

import counterReducer from './counter';
import { counterActions } from '../actions';

test('returns default state correctly', (t) => {
  expect(counterReducer(undefined, {})).to.equal(0);
});

test('returns state when wrong action', (t) => {
  expect(counterReducer(10, {})).to.equal(10);
});

test('returns increased / decreased state', (t) => {
  expect(counterReducer(10, counterActions.increase())).to.equal(11);
  expect(counterReducer(11, counterActions.decrease())).to.equal(10);
});

test('keeps state bigger or equal to 0', (t) => {
  expect(counterReducer(0, counterActions.decrease())).to.equal(0);
});
