import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Go home or
        </p>
        <a
          className="App-link"
          href="https://bing.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Bing!
        </a>
      </header>
    </div>
  );
}

export default App;
