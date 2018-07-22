import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

class TodoFooter extends Component {

  render() {
    return (
      <div>
        <p><span style={{color: 'red'}}>未完成：{this.props.notDoneCount}</span> / 總數：{this.props.todosLength}</p>
      </div>
    );
  }
}

export default TodoFooter;
