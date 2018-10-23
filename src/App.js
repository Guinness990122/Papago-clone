import React, { Component } from 'react';
import './App.css';

class Translator extends Component {
  constructor(props){
    super(props);
    this.state = {value:''}
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.onClick = this.onClick.bind(this);}

  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('get' + this.state.value);
    event.preventDefault();
  }
  onClick(){
    this.setState({value:this.refs.textArea.ReactDOM.findDOMNode(this)});
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <div className="header">
          <img src="https://papago.naver.com/79a02f579e43a422f7ec25aec44f45cf.svg" className="logo" alt="logo"/>
          <div className="header-func">
            <img src="https://papago.naver.com/49d8a326b77e64c7d2cedbd8e35e33ce.svg" className="Menu" alt="Menu"/>
            <img src="https://papago.naver.com/634901381a7f01d7115707ffa872ae8c.png" className="Highlight" alt="Highlight"/>
            <img src="https://papago.naver.com/b0117c1148b0a13cec3da4c119855b3b.png" className="Setting" alt="Setting"/>
          </div>
          <hr width="100%" color="#e9e9e9"/>
        </div>
        <div className="body">
        <select className="Language">
        <option value="English">English</option>
        <option value="Korean">Korean</option>
        <option value="Japanese">Japanese</option>
        <option value="Chinese">Chinese</option>
        </select>

        <img src ="https://papago.naver.com/4d31b24d041c26615b62b1dc88263316.png" className="arrow" alt="arrow" />
        <label>
        <textarea onChange={this.handleChange} className="Textarea" id="Textarea" placeholder="번역할 내용을 입력하세요."></textarea>
        value={this.state.value}
        </label>

        <img src="https://papago.naver.com/78cef6a801f2b67b73966d965b43677c.png" className="copy" alt="arrow" />
        <div><button onClick={this.onClick} id ="translate" className="translate" >번역하기</button></div>
        </div>

        <div className="resultbody">
        <select className="Language">
        <option value="English">English</option>
        <option value="Korean">Korean</option>
        <option value="Japanese">Japanese</option>
        <option value="Chinese">Chinese</option>
        </select>

        <div className="result" id="result">
        <textarea ref="textArea" className="Textarea" id="Textarea" readOnly="readOnly">
        </textarea>
        <img src="https://papago.naver.com/78cef6a801f2b67b73966d965b43677c.png" className="copy" alt="arrow" />
        </div>
        </div>

      <div className="Footer">
      <hr width="100%" color="#e9e9e9"/>
       <h4>권OO (TaeBbong)<br/>
       facebook.com/taebbong&nbsp;&nbsp;github.com/TaeBbong </h4>
      </div>
      </form>
      </div>
    );
  }
}

export default Translate;
