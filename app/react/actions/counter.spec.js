import React from 'react';
import test from 'ava';
import chai, { expect } from 'chai';

import { counterActions } from '.';
import { counterConstants } from '../constants';

test('returns correct increase action', (t) => {
  expect(counterActions.increase()).to.deep.equal({
    type: counterConstants.INCREASE,
  });
});

test('returns correct decrease action', (t) => {
  expect(counterActions.decrease()).to.deep.equal({
    type: counterConstants.DECREASE,
  });
});
