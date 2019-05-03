import React from 'react';
import '../css/App.css';
import HeaderComponent from './HeaderComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {


    return (
      <div className="App" >
        <HeaderComponent></HeaderComponent>
      </div>
    );

  }
}


export default App;
