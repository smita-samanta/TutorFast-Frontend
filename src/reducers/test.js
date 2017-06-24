import { TYPE } from '../actions/test';

export default (state = [], { type, str }) =>
  type === TYPE ? [str, ...state] : state
;
