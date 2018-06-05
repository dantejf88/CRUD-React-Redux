import React, {Component } from "react";

import "./css/card.css"


class Input extends Component {
  handleUploadFile = (event) => {
  const data = new FormData()
  data.append('file', event.target.files[0])
  data.append('name', 'some value user types')
  data.append('description', 'some value user types')
  this.props.mappedUploadImage(data)
}

  render(){
    const appState= this.props.mappedAppState
  return (
          <div className="Card">
              <img width='320' src={appState.image} />
          <div>
             <input type="file" onChange={this.handleUploadFile} />
           </div>



        </div>
        )
      }
    }



export default Input
