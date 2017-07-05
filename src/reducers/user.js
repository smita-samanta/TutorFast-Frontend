export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export default (state = {}, { user, type }) => {
  switch (type) {
    case SET_USER:
      localStorage.setItem('user', JSON.stringify(user));
      return { ...user };

    case UPDATE_USER:
      localStorage.setItem('user', JSON.stringify({ ...state, ...user }));
      return { ...state, ...user };

    default:
      return state;
  }
}
;
