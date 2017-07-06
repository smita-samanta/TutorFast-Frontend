import { API_BASE } from '~/config';
import { screenResponse } from '~/util';

export default ({ password, token }) =>
  fetch(
    `${API_BASE}/user`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({ password }),
    },
  )
    .then(screenResponse)
    .then(res => res.json())
;
