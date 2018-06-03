// ./react-redux-client/src/actions/appActions.js
import fetch from 'isomorphic-fetch';

const apiUrl = "/api/";

export const showAddModalAction = (card) => {
  return {
    type: "SHOW_ADD_MODAL",
    article: card,
  }
}
 export const hideModalAction = () => {
   return {
     type: "HIDE_ADD_MODAL",
   }
 }

 export const addNewArticle = (article) => {console.log(article)
   return (dispatch) => {
     dispatch(addNewArticleRequest(article));
     return fetch(apiUrl, {
       method:'post',
       headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
       body: article,
     }).then(response => {
       if(response.ok){
         response.json().then(data => {console.log(data.article);
           dispatch(addNewArticleRequestSuccess(data.article, data.message))
         })
       }
       else{
         response.json().then(error => {
           dispatch(addNewArticleRequestFailed(error))
         })
       }
     })
   }
 }

 export const addNewArticleRequest = (article) => {
   return {
     type: 'ADD_NEW_ARTICLE_REQUEST',
     article
   }
 }

 export const addNewArticleRequestSuccess = (article,message) => {
   return {
     type: 'ADD_NEW_ARTICLE_REQUEST_SUCCESS',
     article:article,
     message:message
   }
 }

 export const addNewArticleRequestFailed = (error) => {
   return {
     type: 'ADD_NEW_ARTICLE_REQUEST_FAILED',
     error
   }
 }

 export const fetchArticles = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchArticlesRequest());
    // Returns a promise
    return fetch(apiUrl,
                {method:"get"}
                )
                .then(response => {
                  console.log(response)
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchArticlesSuccess(data.articles,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchArticlesFailed(error));
                    })
                  }
                })


  }
}

export const fetchArticlesRequest = () => {
  return {
    type:'FETCH_ARTICLES_REQUEST'
  }
}


//Sync action
export const fetchArticlesSuccess = (articles,message) => {
  return {
    type: 'FETCH_ARTICLES_SUCCESS',
    articles: articles,
    message: message,
  }
}

export const fetchArticlesFailed = (error) => {
  return {
    type:'FETCH_ARTICLES_FAILED',
    error
  }
}
export const deleteArticle = (article) => { console.log(article);
  return (dispatch) => {
    dispatch(deleteArticleRequest(article));
    return fetch(apiUrl + article._id ,{
      method:'delete',

    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteArticleSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteArticleFailed(error));
        })
      }
    })

  }
}

export const deleteArticleRequest = (article) => {
   return {
     type:'DELETE_ARTICLE_REQUEST',
     article
   }
}

export const deleteArticleSuccess = (message) => {
  return {
    type:'DELETE_ARTICLE_SUCCESS',
    message:message
  }
}

export const deleteArticleFailed = (error) => {
  return {
    type:'DELETE_ARTICLE_FAILED',
    error
  }
}
