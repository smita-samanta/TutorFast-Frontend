export const TYPE = 'TEST';

export default (state = [], { type, str }) =>
  type === TYPE ? [str, ...state] : state
;
