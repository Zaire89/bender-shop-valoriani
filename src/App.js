import './App.css';
import NavBar from './components/Nav-bar/Nav-bar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import {CartPorvider} from './context/CartContext';
import {Cart} from './components/Cart/Cart';

function App() {
  return (



    <BrowserRouter  class="container-fluid">

      <CartPorvider> 
        <div className="App">

          <NavBar />

          <Switch>
            <Route exact path='/'>
              <div class="d-flex justify-content-center">
              
              <ItemListContainer presenta="Nuestros Productos!"/>
              </div>
              
            </Route>

            <Route path='/categoria/:categoriaId'>
              <div class="container  m-l auto m-r auto">
                <ItemListContainer />
              </div>
            </Route>
            
            <Route path='/producto/:productoId'>
              <ItemDetailContainer />
            </Route>    

            <Route path='/cart'>
              <Cart />
            </Route>

          </Switch>

        </div>

      </CartPorvider>
      
    </BrowserRouter>


  );
}

export default App;
