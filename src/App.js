import './App.css';
import NavBar from './components/Nav-bar/Nav-bar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />

        <Switch>
          <Route exact path='/'>
            <div class="d-flex justify-content-center">
            Home animacion logo
            <ItemListContainer/>
            </div>
            
          </Route>

          <Route path='/categoria/:categoriaId'>
            <div class="row justify-content-around ">

              <ItemListContainer presenta="Nuestros Productos!"/>
            </div>
          </Route>
           
          <Route path='/producto/:productoId'>
            <ItemDetailContainer />
          </Route>    

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
