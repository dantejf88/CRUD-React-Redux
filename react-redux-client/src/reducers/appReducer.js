// ./react-redux-client/src/reducers/appReducer.js
import data from "../api.json"

const INITIAL_STATE = {
  data: {
    ...data,
  },
  articles: [],
  showAddModal: false,
  isFetching: false,
  error: null,
  successMsg:null,
  articleToAdd: null,
  articleToDelete: null,
  budget: 0,
  image: null
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return {
        ...currentState,
        articles: [],
        showAddModal: false,
        isFetching: true,
        error: null,
        successMsg:null,
        articleToAdd: null,
        articleToDelete: null,
        budget: currentState.budget,
        image: null
      }

    case 'FETCH_ARTICLES_SUCCESS':
      return {
        ...currentState,
        articles: action.articles,
        showAddModal: false,
        isFetching: false,
        error: null,
        successMsg:action.message,
        articleToAdd: null,
        articleToDelete: null,
        budget: currentState.budget,
        image: null
      }

    case 'FETCH_ARTICLES_FAILED':
      return {
        ...currentState,
        articles: [],
        showAddModal: false,
        isFetching: false,
        error: action.error,
        successMsg:null,
        articleToAdd: null,
        articleToDelete: null,
        budget: currentState.budget,
        image: null
      }

    case "SHOW_ADD_MODAL":
            return {
              ...currentState,
              articles: currentState.articles,
              showAddModal: true,
              isFetching: false,
              error: null,
              successMsg:null,
              articleToAdd: action.article,
              articleToDelete: null,
              budget: currentState.budget,
              image: null
            }

    case "HIDE_ADD_MODAL":
            return {
              ...currentState,
              articles: currentState.articles,
              showAddModal: false,
              isFetching: false,
              error: null,
              successMsg:null,
              articleToAdd: null,
              articleToDelete: null,
              budget: currentState.budget,
              image: null
            }

    case 'ADD_NEW_ARTICLE_REQUEST':
                  return {
                    ...currentState,
                    articles: currentState.articles,
                    showAddModal: true,
                    isFetching: true,
                    error: null,
                    successMsg:null,
                    articleToAdd: action.article,
                    articleToDelete: null,
                    budget: currentState.budget,
                    image: null
                  }

    case 'ADD_NEW_ARTICLE_REQUEST_FAILED':
                  return {
                    ...currentState,
                    articles: currentState.articles,
                    showAddModal: true,
                    isFetching: true,
                    error: action.error,
                    successMsg:null,
                    articleToAdd: null,
                    articleToDelete: null,
                    budget: currentState.budget,
                    image: null
                  }

    case 'ADD_NEW_ARTICLE_REQUEST_SUCCESS':

                  let presu = currentState.budget + action.article.costo
                  const nextState =  {
                    ...currentState,
                    articles: [...currentState.articles, action.article],
                    showAddModal: true,
                    isFetching: false,
                    error: null,
                    successMsg: action.message,
                    articleToAdd: action.article,
                    articleToDelete: null,
                    budget: presu,
                    image: null
                  }
                return nextState

    case 'DELETE_ARTICLE_REQUEST':
                  return {
                    ...currentState,
                    articles: currentState.articles,
                    showAddModal: false,
                    isFetching: true,
                    error: null,
                    successMsg:null,
                    articleToAdd: null,
                    articleToDelete: action.article,
                    budget: currentState.budget,
                    image: null
                  }


            case 'DELETE_ARTICLE_SUCCESS':
            const filteredArticles = currentState.articles.filter((article) => article._id !== currentState.articleToDelete._id)
            let lessPresu = currentState.budget - currentState.articleToDelete.costo
                  return {
                    ...currentState,
                    articles: filteredArticles,
                    showAddModal: false,
                    isFetching: false,
                    error: null,
                    successMsg:action.message,
                    articleToAdd: null,
                    articleToDelete: null,
                    budget: lessPresu,
                    image: null
                  }


            case 'DELETE_ARTICLE_FAILED':
                  return {
                    ...currentState,
                    articles: currentState.articles,
                    showAddModal: false,
                    isFetching: false,
                    error: action.error,
                    successMsg: null,
                    articleToAdd: null,
                    articleToDelete: null,
                    budget: currentState.budget,
                    image: null
                  }

            case "UPLOAD_IMAGE":
                    return {
                      ...currentState,
                      articles: currentState.articles,
                      showAddModal: false,
                      isFetching: false,
                      error: null,
                      successMsg: null,
                      articleToAdd: null,
                      articleToDelete: null,
                      budget: currentState.budget,
                      image: action.file
                    }
            case "UPLOAD_IMAGE_FAILED":
                    return {
                      ...currentState,
                      articles: currentState.articles,
                      showAddModal: false,
                      isFetching: false,
                      error: error,
                      successMsg: null,
                      articleToAdd: null,
                      articleToDelete: null,
                      budget: currentState.budget,
                      image: null
                    }
  default:
       return currentState;
    }

}
export default appReducer;
