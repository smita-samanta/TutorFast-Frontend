export const TYPE = 'SET_USER';

export default
(state = { user: {} }, { type, user }) => type === TYPE
  ? { ...user }
  : state
;
