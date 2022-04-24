import logo from './logo.png';
import './App.css';
import React from 'react';


class App extends React.Component {
   url="https://www.bridgelabz.com/";
  constructor() {
    super()
    this.state = {
    userName: ''
    }
  }

//Event Binding technique
 onClicked(Event){
  console.log("button is clicked",Event);
  window.open(this.url,"open")
}
onNameChnage = (Event) => {
  console.log("value is ", Event.target.value);
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  // set the title using setState method
  this.setState({ userName: Event.target.value })
  if (nameRegex.test(Event.target.value)) {
    this.setState({ nameError: '' })
  } else {
    this.setState({ nameError: 'Name is Incorrect' })
  }
}

render() {
  return (
    <>
    <div>
      <h1>hello {this.state.userName} from bridgelabz</h1>
      <img src={logo} onClick={this.onClick}
        alt="logo" />
    </div>
    <div>
      <input onChange={this.onNameChnage}/>
      <span className="error-output">{this.state.nameError}</span>
    </div>
    </>
  );
}
}

export default App;