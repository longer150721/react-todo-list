require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

let memory = new Array();
let now_page = 0;
let myDate = new Date();


let AppComponent = React.createClass({
  Search: function(num) {
    if(num == '-1'){
      now_page = 0;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">Lanciy\'s </span>to do list';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'This is a stupid app';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'You can click the bottom left';
      ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'Or add details in input box here';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num == '1'){
      now_page = 1;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lib one has been done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML= 'Eventual score : 75';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Max score : 75';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num == '2'){
      now_page = 2;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lib two has been done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'Phases Defused : 7';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Explosions : 3';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num == '3'){
      now_page = 3;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lib three has been done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'Eventual score : 60';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Max score : 60';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num == '4'){
      now_page = 4;
      let dayleft = 27 - myDate.getDate();
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lib four is waiting for being done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML= 'Deadline : 11/27/2017';
      if (dayleft > 0){ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Days left : '+ dayleft;}
      else {ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Beyond the deadline'}
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num == '5'){
      now_page = 5;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lib five has not been shown</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'May be shown on 11/30/2017';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Ddl may on 12/8/2017';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num == '6'){
      now_page = 6;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lib six has not been shown</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'May be shown on 12/14/2017';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Ddl may on 12/25/2017';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }

  },

  Change:function(ref){
    let innerDOM = ReactDOM.findDOMNode(this.refs[ref]);
    //let thingDOM = ReactDOM.findDOMNode(this.refs['thin'+ ref]);
    if  (innerDOM.innerHTML == 'Done✔'){
      innerDOM.innerHTML = 'Wait✘';
    }
    else if  (innerDOM.innerHTML == 'Wait✘'){
      innerDOM.innerHTML = 'Hurry❤';
    }
    else if  (innerDOM.innerHTML == 'Hurry❤'){
      innerDOM.innerHTML = 'Done✔';
    }
  },

  submit:function(){
    let input = ReactDOM.findDOMNode(this.refs['input']).value;
    let detailDOM = ReactDOM.findDOMNode(this.refs['detail']);
    detailDOM.innerHTML = input;
    memory[now_page] = input;
    ReactDOM.findDOMNode(this.refs['input']).value = '';
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    return (
      <div>
        <div className="sidebar jsc-sidebar">
          <ul className="sidebar-list">
            <li><a href="#" ref="g1" style={{float:'right'}} >Done✔</a></li>
            <li><a href="#" ref="thing1" onClick={this.Search.bind(this,'1')}><span style={{textDecoration: 'line-through'}}>Lib One</span></a></li>
            <li><a href="#" ref="g2" style={{float:'right'}} >Done✔</a></li>
            <li><a href="#" ref="thing2" onClick={this.Search.bind(this,'2')}><span style={{textDecoration: 'line-through'}}>Lib Two</span></a></li>
            <li><a href="#" ref="g3" style={{float:'right'}} >Done✔</a></li>
            <li><a href="#" ref="thing3" onClick={this.Search.bind(this,'3')}><span style={{textDecoration: 'line-through'}}>Lib Three</span></a></li>
            <li><a href="#" ref="g4" onClick={this.Change.bind(this,'g4')} style={{float:'right'}} >Hurry❤</a></li>
            <li><a href="#" ref="thing4" onClick={this.Search.bind(this,'4')}>Lib Four</a></li>
            <li><a href="#" ref="g5" onClick={this.Change.bind(this,'g5')} style={{float:'right'}} >Wait✘</a></li>
            <li><a href="#" ref="thing5" onClick={this.Search.bind(this,'5')}>Lib Five</a></li>
            <li><a href="#" ref="g6" onClick={this.Change.bind(this,'g6')} style={{float:'right'}} >Wait✘</a></li>
            <li><a href="#" ref="thing6" onClick={this.Search.bind(this,'6')}>Lib Six</a></li>
            <br />
            <li><a href="#" onClick={this.Search.bind(this,'-1')}>Home</a></li>
          </ul>
        </div>
        <div className="main-content">
          <h1 className="headline" ref="head"><span className="headline-main">Lanciy's </span>to do list</h1>
          <p ref="part1">This is a stupid app</p>
          <p ref="part2">You can click the bottom left</p>
          <p ref="detail">Or add details in input box here</p>
          <br/><br/><br/>
          <input ref="input" type="text" maxLength={25} onChange={this.handleChange}/>
          <br/><br/>
          <a href="#" ref="submit" onClick={this.submit}>Click here to add details</a>
        </div>
          <div id="root" className="corner">
        </div>
      </div>
    );
  }
});

function ticking(){
  let seperator1 = '-';
  let seperator2 = ':';
  let month = new Date().getMonth() + 1;
  let strDate = new Date().getDate();
  const element = (
    <div>
      <h1>{'Time : ' + new Date().getFullYear() + seperator1 + month + seperator1 + strDate
      + ' ' + new Date().getHours() + seperator2 + new Date().getMinutes()
      + seperator2 + new Date().getSeconds()}</h1>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(ticking, 1000);

AppComponent.defaultProps = {
};

export default AppComponent;
