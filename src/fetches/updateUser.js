import { API_BASE } from '~/config';
import { screenResponse } from '~/util';

export default user =>
  fetch(
    `${API_BASE}/user`,
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: user.token,
      },
      body: JSON.stringify(user),
    },
  )
    .then(screenResponse)
    .then(res => res.json())
;
