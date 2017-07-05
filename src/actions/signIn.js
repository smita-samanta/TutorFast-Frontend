import { SET_USER } from '~/reducers/user';

export default (user: {}, token: ?string) =>
  ({ type: SET_USER, user: { token, ...user } });
