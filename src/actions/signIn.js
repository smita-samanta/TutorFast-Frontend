import { TYPE } from '~/reducers/setUser';

export default (user: {}, token: ?string) =>
  ({ type: TYPE, user: { token, ...user } });
