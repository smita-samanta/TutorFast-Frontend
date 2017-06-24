import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld';
import test from '../actions/test';

export default connect(
  ({ test }) => ({ list: test }),
  dispatch => ({ onClick: () => dispatch(test('something')) }),
)(HelloWorld);
