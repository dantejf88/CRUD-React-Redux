import React, { Component } from 'react';
import UploadInput from "./UploadInput"

export default class App extends Component {


  componentWillMount(){
  this.props.fetchArticles();
}

handleDelete(article){
  this.props.deleteArticle(article)
}

render() {
    const appState= this.props.mappedAppState
    const articles = appState.articles
    console.log(articles);
    return (
      <div>
        <h1>Lista de artículos</h1>
        {articles.length <= 0 &&
          <p>No hay artículos seleccionados</p>
        }
        <div>

          {articles && articles.length > 0 && !appState.isFetching &&
            <table className="Table">
              <thead>
                <tr><th>Artículo</th><th>Precio</th></tr>
              </thead>
              <tbody>
                  {  articles.map((article, i) =>
                    <tr key={i}>
                        <td>{article.title}</td>
                        <td>${article.costo}</td>
                        <td><button onClick={() => this.handleDelete(article)}>Eliminar</button></td>

                    </tr>)
                  }

              </tbody>
          </table>
          }
        </div>
        <div>
            <UploadInput mappedAppState = {this.props.mappedAppState}/>
        </div>
      </div>
    );
  }
}
