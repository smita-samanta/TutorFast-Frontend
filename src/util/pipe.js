// @flow

// given a function fn, passthrouh will return a new function ret that
// will return the first argument passed to it.
export default
(fn: Function): Function =>
  (arg: {}): {} => {
    fn(arg);
    return arg;
  }
;
