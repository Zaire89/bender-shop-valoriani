import './App.css';
import NavBar from './components/Nav-bar/Nav-bar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">

      <NavBar />
      
      <div class="row justify-content-around ">
        <ItemCount stock="15" initial="0" />
        <ItemListContainer />
      </div>


    </div>
  );
}

export default App;
