import { API_BASE } from '~/config';
import { screenResponse } from '~/util';

export default (token: string): Promise =>
  fetch(
    `${API_BASE}/user`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: token,
      },
    },
  )
    .then(screenResponse)
    .then(res => res.json())
    .then(user => ({ ...user, token }))
;
