import React, { Component } from "react"
import { Alert, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import Card from "./Card"
import ArticleModal from "./articleModal"
import "./css/greed.css";
import Budget from "./Budget"
import Header from "./dumbHeader"

var querystring = require("querystring")

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
                <div key={item.id}>
                  <Card {...item} key={item.id}   className="Card"/>

                        <Button onClick={() => this.handleModalAction(item)} className="Button">Sumar</Button>


                </div>
                )
              })
          }
          <h1 className="PlaylistTitle">Telas</h1>
          {data.categories[1] &&
          data.categories[1].playlist.map((item) => {
            return (
                <div key={item.id}>
                  <Card {...item} key={item.id}   className="Card"/>

                        <Button onClick={() => this.handleModalAction(item)} className="Button">Sumar</Button>


                </div>
                )
              })
          }
        {/*Add Modal*/}
        <div  className="Modal">
      {showModal &&
          <Modal
            isOpen={showModal}
            onRequestClose={this.hideModal}
          >
            <Button bsStyle="danger" bsSize="small" onClick={this.hideModal}><span className="closebtn glyphicon glyphicon-remove">X</span></Button>

          <ArticleModal
                article={articleToAdd}
                addArticle={this.addArticle}
            ></ArticleModal>
          {showModal  && !greedState.isFetching && greedState.successMsg &&
                  <Alert bsStyle="success">
              El artículo <strong> {articleToAdd.title} </strong>fue agregado a la compra <br />
              <Button bsStyle="danger" bsSize="small" onClick={this.hideModal}><span className="closebtn glyphicon glyphicon-remove">Cerrar</span></Button>
                  </Alert>
            }
          </Modal>
      }
      </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Greed
