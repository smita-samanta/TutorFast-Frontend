import { UPDATE_USER } from '~/reducers/user';

export default (user: {}) =>
  ({ type: UPDATE_USER, user });
