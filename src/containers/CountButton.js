import {connect} from 'react-redux';
import Button from '../components/Button';
import {counterActionCreator} from '../action-creators';

const {countUp} = counterActionCreator;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(countUp());
  },
});

const CountButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default CountButton;
