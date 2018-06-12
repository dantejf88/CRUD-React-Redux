import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
import "./css/articleModal.css"

const ArticleModal = (props) => {
  return (
    <form className="form form-horizontal" id="ArticleForm" onSubmit={props.addArticle}>
    <div className="row">
      <img
        src={props.article.cover}
        alt=""
        width={340}
        height={270}

        />
    <div className="col-md-12">
    <FormGroup className="Formcolor">
            <ControlLabel>Artículo: </ControlLabel>
                <FormControl
                  type="text"
                  name="title" defaultValue={props.article.title} readOnly
                   />

        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup className="Formcolor">
          <ControlLabel >Precio: $</ControlLabel>
          <FormControl
            type="number"
            name="costo" defaultValue={props.article.costo} readOnly
            />
            </FormGroup>
            </div>
          </div>

          <FormGroup>
              <Button type="submit" block>Agregar a la compra</Button>
          </FormGroup>
        </form>
  );
}

export default ArticleModal;
