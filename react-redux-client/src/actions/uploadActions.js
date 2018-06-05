import axios from "axios"

export const uploadImage = (image) => {
   return (dispatch) => {
     dispatch(uploadImageRequest(image));
     axios.post('/files', image).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.name);
          dispatch(uploadImageRequestSucces(data.fileUrl))
        })
      }
      else{
        response.json().then(error => {
          dispatch(uploadImageRequestFailed(error))
        })
      }
    })
  }
}



export const uploadImageRequest = (image) => {
  return {
    type: "UPLOAD_IMAGE",
    file: image,
  }
}
export const uploadImageRequestSucces = (image) => {
  return {
    type: "UPLOAD_IMAGE_SUCCES",
    file: image,
  }
}
export const uploadImageRequestFailed = (error) => {
  return {
    type: "UPLOAD_IMAGE_FAILED",
    error
  }
}
