// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Greed from "./containers/Greed"
import UploadInput from "./containers/UploadInput"
// {import Articles from './containers/Articles';}

export default (
  <Route path="/" component={Greed}>
       <IndexRoute component={App} />
       <IndexRoute component={UploadInput} />

  </Route>
)
