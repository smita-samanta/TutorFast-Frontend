import React from 'react';

export default (
  { onClick, list = ['default'] } :
  { onClick: Function, list: Array<String> }
) =>
  <div>
    <h1 onClick={onClick}> Hello World! </h1>
    <ul> {list.map(
      (itm, idx) => <li key={idx}> { itm } </li>
    )} </ul>
  </div>;
