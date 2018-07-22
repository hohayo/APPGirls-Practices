import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    name1:'',
    name2:'',
    word:'',
    text:'',
    love:'',
  }

  click1 = () => {
    this.setState({word: this.state.name1})
  }
  click2 = () => {
    this.setState({text: this.state.name1 + '好棒喔！'})
  }
  click3 = () => {
    this.setState({love: this.state.name1 + '愛' + this.state.name2})
  }

  test = () => {
    // this.setState({love: this.state.name1 + '愛' + this.state.name2})
    document.getElementById('test').innerHTML = this.state.name1 + '愛' + this.state.name2
  }

  handleChange1 = (event) => {
    this.setState({name1: event.target.value})
  }

  handleChange2 = (event) => {
    this.setState({name2: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange1}></input>
        <input onChange={this.handleChange2}></input>
        <button onClick={this.click1}>Click1</button>
        <p>即時顯示：{this.state.name1}</p>
        <p>你輸入的名字：{this.state.word}</p>
        <button onClick={this.click2}>Click2</button>
        <p>好心情對話：{this.state.text}</p>
        <button onClick={this.click3}>Click3</button>
        <p>羞羞臉對話：{this.state.love}</p>
       <p>{this.state.name1} love {this.state.name2}</p>
        <button onClick={this.test}>我要測試</button>
        <div id="test"></div>
      </div>
    );
  }
}

/*
作法：
先設定初始變數
將變數綁定事件變化時的變數
設定不同按鈕的動作
Click1: 輸出至要顯示的區塊1
Click2: 將取得變數值加文字輸出至區塊2
Click3: 將取得變化的二個變數值指定一個新變數代入區塊3
*/
export default App;
