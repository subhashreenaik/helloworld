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
      <html>
        <body>
          <div className="container">
            <div className="main-container">
              <div className="header">
                <h1>Hello {this.state.userName} from Bridgelabz</h1>
              </div>
              <div>
                <img src={logo} onClick={this.onClick}
                  alt="This Bridgelabz logo: a Bridge to Employment through lab works" />
                <input onChange={this.onNameChnage} />
              </div>
              <span className="error-output">{this.state.nameError}</span>
              <div>
                <p>At BridgeLabz, we're a community of </p>
                <ul>
                  <li>Technoligist</li>
                  <li>Thinkers</li>
                  <li>Builders</li>
                </ul>
                <p>
                  Working together to keep Tech employability of enginners alive and
                  accesible so tech comanies worldwide
                  get contributors and creators for technology solutions.
                  We believe this act of human collaboration acrosss an employability
                  platform is essential to individual growth and our collective future
                </p>
                <p>
                  To know about us , visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
                  to learn even more about out mission i.e. <strong>Employability to all</strong>
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
}

export default App;