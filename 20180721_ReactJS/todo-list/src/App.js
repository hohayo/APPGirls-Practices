import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, Checkbox } from 'antd';

class App extends Component {

  state = {
    // todos: [{
    //   description:'倒垃圾', 
    //   name: 'kevin',
    //   done: false
    // }, {
    //   description:'做家事', 
    //   name: 'mary',
    //   done: false
    // }],
    todos: [],
    input: '',
    notDoneCount:0  //還沒有完成的
  }

  add = () => {
    // console.log('add')
    let todos = this.state.todos
    let notDoneCount = this.state.notDoneCount
    notDoneCount += 1
    
    todos.push({
      description:this.state.input,
      done: false
    })

    this.setState({
      todos:todos,
      input:'',
      notDoneCount:notDoneCount
    })
  }

  handleChange = (e) => {
    this.setState({input:e.target.value})
  }

  handleCheckbox = (index) => {
    let todos = this.state.todos  //把值拿出來
    let notDoneCount = this.state.notDoneCount

    // todos[index].done = todos[index].done ? false : true // 法1:判斷原本是什麼，就輸入相反
    // if (todos[index].done) {
    //   notDoneCount -= 1
    // } else {
    //   notDoneCount += 1
    // }
    // console.log(todos[index].done)

    if (todos[index].done === true) { // 法2:
      todos[index].done = false
      notDoneCount += 1
    } else {
      todos[index].done = true
      notDoneCount -= 1
    }

    this.setState({todos:todos,notDoneCount:notDoneCount})  //把值放回去
    // console.log(todos)
  }

  render() {
    return (
      <div className="App">
        <h1>待辦事項</h1>
        {
          this.state.todos.map((todo, index)=>{
            // return(<p>{todo.name}:{todo.description}</p>)
            return(
              <div key={index}>
                變種<Checkbox onChange={()=>this.handleCheckbox(index)} />
                <a style={todo.done?{textDecoration:'line-through'}:{}}>{todo.description}</a>
              </div>
            )
          })
        }

        <p>未完成：{this.state.notDoneCount}/總數：{this.state.todos.length}</p>
        <Input style={{width:'200px'}} value={this.state.input} onChange={this.handleChange}/>
        <Button type="primary" onClick={this.add}>新增</Button>
      </div>
    );
  }
}

export default App;
