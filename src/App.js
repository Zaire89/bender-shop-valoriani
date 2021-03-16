import './App.css';
import NavBar from './components/Nav-bar/Nav-bar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <NavBar />
      
      <div class="row justify-content-end">
        <ItemListContainer />
      </div>


    </div>
  );
}

export default App;
