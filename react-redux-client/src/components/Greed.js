import React, { Component } from "react"
import { Alert } from 'react-bootstrap';
import { Button } from 'react-materialize'
import Modal from 'react-modal';
import Card from "./Card"
import ArticleModal from "./articleModal"
import "./css/greed.css";
import Budget from "./Budget"
import Header from "./dumbHeader"

var querystring = require("querystring")

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Greed extends Component{
constructor(props){
  super(props);
  this.hideModal = this.hideModal.bind(this);
  this.addArticle = this.addArticle.bind(this);
  this.handleModalAction = this.handleModalAction.bind(this);
}


handleModalAction(item){
  this.props.showAddModalAction(item)
}

hideModal(){
  this.props.hideModalAction()
}

  addArticle(e){
    e.preventDefault();
    const articleForm = document.getElementById('ArticleForm');
    const objArticle = querystring.stringify({
      title: articleForm.title.value,
      costo:  articleForm.costo.value
    })
    this.props.addArticleAction(objArticle)
}

  render(){
    const greedState = this.props.mappedAppState
    const data=greedState.data
    const articleToAdd= greedState.articleToAdd
    const showModal= greedState.showAddModal
  return (
      <div className="Greed">
          <Header />
          <Budget budget={greedState.budget}/>
          <h1 className="PlaylistTitle">Ornamentos</h1>
          {data.categories[0] &&
          data.categories[0].playlist.map((item) => {
            return (
                <div  key={item.id}>
                  <Card {...item} key={item.id}   className="Card"/>

                        <Button onClick={() => this.handleModalAction(item)} className="Button">Sumar</Button>


                </div>
                )
              })
          }
          <h1 className="PlaylistTitle">Arreglo de telas</h1>
          {data.categories[1] &&
          data.categories[1].playlist.map((item) => {
            return (
                <div  key={item.id}>
                  <Card {...item} key={item.id}   className="Card"/>

                        <Button onClick={() => this.handleModalAction(item)} className="Button">Sumar</Button>


                </div>
                )
              })
          }
        {/*Add Modal*/}
      {showModal &&
        <div >
          <Modal
            isOpen={showModal}
            onRequestClose={this.hideModal}
            style={customStyles}
          >
            <Button bsstyle="danger" bssize="small" onClick={this.hideModal}><span className="closebtn glyphicon glyphicon-remove">X</span></Button>

          <ArticleModal
                article={articleToAdd}
                addArticle={this.addArticle}
            >
          </ArticleModal>
          {showModal  && !greedState.isFetching && greedState.successMsg &&
                  <Alert bsStyle="success" className="AlertColor">
              El artículo <strong> {articleToAdd.title} </strong>fue agregado a la compra <br />
            <Button  onClick={this.hideModal}><span className="closebtn glyphicon glyphicon-remove">Cerrar</span></Button>
                  </Alert>
            }
          </Modal>
        </div>
      }
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Greed
