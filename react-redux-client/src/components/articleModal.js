import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ArticleModal = (props) => {
  return (
    <form className="form form-horizontal" id="ArticleForm" onSubmit={props.addArticle}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          {/*<input type="hidden" value={props.article._id} name="id"/>*/}
            <ControlLabel>Artículo: </ControlLabel>
                <FormControl
                  type="text"
                  name="title" defaultValue={props.article.title} readOnly
                   />
            {/*
              <label htmlFor="title">Artículo  : </label><input type="text" id="titleId" name="title" value={props.article.title} readOnly></input>
            */}
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Precio: $</ControlLabel>
          <FormControl
            type="number"
            name="costo" defaultValue={props.article.costo} readOnly
            />
              {/*
                <label htmlFor="costo">Costo: $</label><input type="number" id="costoId" name="costo" value={props.article.costo} readOnly></input>
              */}
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Agregar</Button>
          </FormGroup>
        </form>
  );
}

export default ArticleModal;
