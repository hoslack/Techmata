import React, {Component} from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import PaymentForm from './Payment'

class App extends Component {
  render() {
    return <div className="App">
      <PaymentForm/>
    </div>;
  }
}


export default App;
