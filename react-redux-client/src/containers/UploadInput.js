import { connect } from 'react-redux';
import * as uploadActions from '../actions/uploadActions';
import UploadInput from '../components/UploadInput';

const mapStateToProps = (state) => {
  return {

    mappedAppState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  mappedUploadImage: data => dispatch(appActions.uploadImage(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UploadInput);
