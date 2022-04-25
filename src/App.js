import logo from './logo.png';
import './App.css';
import React from 'react';
import Home from './Home';
import Main from './Main';
import { Switch,Link,Route } from 'react-router-dom';


class App extends React.Component {
  
  constructor() {
    super()
    
    this.state = {
    userName: ''
    
    }
  }

//Event Binding technique
 onClicked(){
  
   window.open("https://www.bridgelabz.com");
   
  
}
onNameChnage = (Event) => {
  console.log("value is ", Event.target.value);
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  
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
     
          <div className="container">
            <div className="main-container">
              <div className="header">
                <h1>Hello {this.state.userName} from Bridgelabz</h1>
              </div>
              <div>
                <img src={logo} onClick={this.onClicked}
                  alt="This Bridgelabz logo: a Bridge to Employment through lab works" />
                <input onChange={this.onNameChnage} />
              </div>
              <Link to="/home">Home </Link>
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
          <div>
        <li>
              <Link to="/home">Home </Link>
              <Link to="/main">Main </Link>
            </li>
          
        </div>
        
         {/* <Switch>
<Route exact path='/home' element={< Home/>} ></Route>
<Route  exact path='/main' element={<Main/>} ></Route>

         </Switch>  */}

         <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/' component={Main}></Route>
    </Switch> 
      
        
    </>
  );
}
}

export default App;