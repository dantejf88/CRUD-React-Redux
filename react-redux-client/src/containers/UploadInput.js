import { connect } from 'react-redux';
import * as uploadActions from '../actions/uploadActions';
import UploadInput from '../components/UploadInput';
// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
  mappedUploadImage: image => dispatch(appActions.uploadImage(article))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UploadInput);
