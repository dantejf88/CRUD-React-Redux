import axios from "axios"

export const uploadImage = (image) => {
axios.post('/files', data).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.name);
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

  // this.setState({
  //   imageUrl: response.data.fileUrl
  //   })
  })
}

export const showAddModalAction = (image) => {
  return {
    type: "UPLOAD_IMAGE",
    file: image,
  }
}
