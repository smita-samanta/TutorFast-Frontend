import React from 'react';

export default
(
  { location } :
  { location: { pathname: string } }
) =>
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
;
