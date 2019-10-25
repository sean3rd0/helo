import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav"
import {HashRouter} from "react-router-dom"
import routes from "../src/routes"
import {Provider} from "react-redux"
import store from "./ducks/store"

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
