import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, Checkbox } from 'antd';
import TodoForm from '../components/TodoForm/TodoForm'
import TodoFooter from '../components/TodoList/TodoFooter';
import TodoItem from '../components/TodoList/TodoItem';

class App extends Component {

  state = {
    todos: [],
    input: '',
    notDoneCount:0
  }

  add = () => {
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
    let todos = this.state.todos 
    let notDoneCount = this.state.notDoneCount

    if (todos[index].done === true) {
      todos[index].done = false
      notDoneCount += 1
    } else {
      todos[index].done = true
      notDoneCount -= 1
    }

    this.setState({todos:todos,notDoneCount:notDoneCount})
  }

  render() {
    return (
      <div className="App">
        <h1>待辦事項</h1>
        {
          this.state.todos.map((todo, index)=>{
            return(
              <TodoItem todo={todo} 
                        index={index} 
                        handleCheckbox={()=>this.handleCheckbox(index)} />
            )
          })
        }
        
        <TodoFooter notDoneCount={this.state.notDoneCount} 
                    todosLength={this.state.todos.length} />
        <TodoForm input={this.state.input} 
                  handleChange={this.handleChange} 
                  add={this.add} />
      </div>
    );
  }
}

export default App;
