// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Child from './Child'
// import Test from './test'

// class App extends Component {

//   state = {
//     word:''
//   }
//   changeFather = (newWord) => {
//     // console.log(newWord)
//     this.setState({word:newWord})
//   }


//   render() {
//     return (
//       <div className="App">
//         This is father. {this.state.word}
//         <Child changeFatherFun={this.changeFather} nameee="kevin" />
//         <Test />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {

  state = {
    backgroundColor:''
  }

  changeBackground=(color)=>()=>{
    this.setState({backgroundColor:color})
  }

  render() {
    return (
      <div style={{backgroundColor:this.state.backgroundColor}}>
        this is Father.
        <Child name="kevin" changeBackgroundFun={this.changeBackground}/>
      </div>
    );
  }
}

export default App;