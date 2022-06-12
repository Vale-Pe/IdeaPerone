import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <p>
          Mi proyecto Javascript
        </p>
        <a
          className="App-link"
          href="https://proyecto-eligetupropiaaventura.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elige tu propia aventura
        </a>
      </header>
    </div>
  );
}

export default App;
