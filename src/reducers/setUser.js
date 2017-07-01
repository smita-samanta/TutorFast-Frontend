export const TYPE = 'SET_USER';

export default
(state = { user: {} }, { type, user }) => {
  if (type !== TYPE) return state;

  localStorage.setItem('user', JSON.stringify(user));
  return { ...user };
}
;
