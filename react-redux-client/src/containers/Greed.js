import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import Greed from '../components/Greed';
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
  showAddModalAction: card => dispatch(appActions.showAddModalAction(card)),
  hideModalAction: () => dispatch(appActions.hideModalAction()),
  addArticleAction: addArticle => dispatch(appActions.addNewArticle(addArticle))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Greed);
