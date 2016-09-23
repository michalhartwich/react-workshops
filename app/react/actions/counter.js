import { counterConstants } from '../constants';

export const increase = () => ({ type: counterConstants.INCREASE });
export const decrease = () => ({ type: counterConstants.DECREASE });
