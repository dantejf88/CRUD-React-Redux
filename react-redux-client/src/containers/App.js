// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as uploadActions from '../actions/uploadActions';
import * as appActions from '../actions/appActions';
import App from '../components/App';
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
  fetchArticles: () => dispatch(appActions.fetchArticles()),
  deleteArticle: article => dispatch(appActions.deleteArticle(article)),
  mappedUploadImage: data => dispatch(uploadActions.uploadImage(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
