import logo from './logo01.png';
import './App.css';
import NavBar from './components/Nav-bar';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Bender Shop
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <NavBar />

        <button
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer" 
        >
          Descargar Juego!
        </button>
      </header>
    </div>
  );
}

export default App;
