// import React, { Component } from 'react';

// class Child extends Component {
//   render() {
//     return (
//       <div>
//           This is child.
//           {this.props.nameee}
//           <button onClick={()=>this.props.changeFatherFun('fatherC')}>Change</button>
//       </div>
//     );
//   }
// }

// export default Child;

import React, { Component } from 'react';

class Child extends Component {

  state = {
    ChildColor: ''
  }

  buttonOn = () => {
    this.props.changeBackgroundFun('blue')
    this.setState({ChildColor:'red'})
  }

  render() {
    return (
      <div>
        <div style={{backgroundColor:this.state.ChildColor}}></div>
        this is Child, his name is {this.props.name}
        {/* <button onClick={this.props.changeBackgroundFun('blue')}>click</button> */}
        <button onClick={this.buttonOn}>click</button>
      </div>

    )
  }
}

export default Child;