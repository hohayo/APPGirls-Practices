import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

class TodoForm extends Component {

  render() {
    return (
      <div>
        <Input style={{width:'200px'}} value={this.props.input} onChange={this.props.handleChange}/>
        <Button type="primary" onClick={this.props.add}>新增</Button>
      </div>
    );
  }
}

export default TodoForm;
