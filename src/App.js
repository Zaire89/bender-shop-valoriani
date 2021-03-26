import './App.css';
import NavBar from './components/Nav-bar/Nav-bar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <NavBar />
      
      <div class="row justify-content-around ">

        <ItemListContainer presenta="Bienvenido a tu carrito!"/>
      </div>

      <ItemDetailContainer />
    </div>
  );
}

export default App;
