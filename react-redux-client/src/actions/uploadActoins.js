const apiUrl = "/api/";

export const uploadImage = (image) => {
axios.post('/files', data).then((response) => {
  this.setState({
    imageUrl: response.data.fileUrl
    })
  })
}

export const showAddModalAction = (image) => {
  return {
    type: "UPLOAD_IMAGE",
    file: image,
  }
}
