import React, { Component } from 'react';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Translator extends Component {
  constructor(props){
    super(props);
    this.state = {value:'',
                  Changevalue:'',
                  copied:false,
                };
  this.handleChange = this.handleChange.bind(this);
  this.onTranslate = this.onTranslate.bind(this);
  this.onRemove = this.onRemove.bind(this);}

  handleChange(event){
    //value값 입력
    this.setState({value:event.target.value});
  }

  onTranslate(){
  //Changevalue값 변경
    this.setState({Changevalue:this.state.value})
  }
  onRemove(){
    this.setState({value:''})
  }

  render() {
    return (
      <div className="App">

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
        <button id="delete" className="delete" onClick={this.onRemove}><img src ='https://fox-gg.com/wp-content/uploads/2018/07/X-Shape-PNG-High-Quality-Image.png' className="deleteimg" alt="deleteimg" /></button>
        <label>
          <textarea className="Textarea" id="Textarea" placeholder="번역할 내용 입력하세요." value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
        <button  type='Submit' className="copy" alt="arrow" ><img src="https://papago.naver.com/78cef6a801f2b67b73966d965b43677c.png" className="copyimg" alt="copyimg"/></button>
        </CopyToClipboard>
        <div><button type='Submit' id ="translate" className="translate" onClick={this.onTranslate}>번역하기</button></div>

        </div>

        <div className="resultbody">
        <select className="Language">
        <option value="English">English</option>
        <option value="Korean">Korean</option>
        <option value="Japanese">Japanese</option>
        <option value="Chinese">Chinese</option>
        </select>
        <div className="result" id="result">
        <textarea ref="textArea" className="Textarea" id="Textarea" value={this.state.Changevalue} readOnly="readOnly"></textarea>
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
        <button type='Submit' className="copy" alt="arrow" ><img src="https://papago.naver.com/78cef6a801f2b67b73966d965b43677c.png" className="copyimg" alt="copyimg"/></button>
        </CopyToClipboard>

        </div>
        </div>

      <div className="Footer">
      <hr width="100%" color="#e9e9e9"/>
       <h4>권OO (TaeBbong)<br/>
       facebook.com/taebbong&nbsp;&nbsp;github.com/TaeBbong </h4>
      </div>
      </div>
    );
  }
}

export default Translator;
