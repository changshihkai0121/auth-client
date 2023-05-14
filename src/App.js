import logo from './logo.svg';
import WebAuthnContent from './WebAuthnContent';  
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-content'>
        <WebAuthnContent />
      </div>
    </div>
  );
}

export default App;
