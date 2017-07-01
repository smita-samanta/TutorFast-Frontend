import { API_BASE } from '~/config';
import { screenResponse } from '~/util';

export default user =>
  fetch(
    `${API_BASE}/user`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    },
  )
    .then(screenResponse)
    .then(res => res.json())
;
