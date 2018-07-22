import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

class TodoItem extends Component {

  render() {
    return (
      <div>
        <div key={this.props.index}>
            <Checkbox onChange={this.props.handleCheckbox} />
            <a style={this.props.todo.done?{textDecoration:'line-through'}:{}}>{this.props.todo.description}</a>
        </div>
      </div>
    );
  }
}

export default TodoItem;
