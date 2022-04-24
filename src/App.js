import logo from './logo.png';
import './App.css';

function App() {
var message="Hello from BridgeLabz";

  return (
    //Demonstrating  property binding
    <div className="App">
      <h1>{message}</h1> 
      <img src={logo} alt='bridgeLabz logo'/>
    </div>
  );
}

export default App;
