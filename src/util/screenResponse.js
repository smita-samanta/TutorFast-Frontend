export default (res: {}): {} => {
  if (res.status >= 200 && res.status < 300) return res;

  if (!res || !res.json)
    throw 'Invalid response object.';

  const err = res.json().err;

  if (err && typeof err === 'string')
    throw err;
  else
    throw 'Request could not be fulfilled.';
};
