require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

let memory = new Array();
let now_page = 0;
let myDate = new Date();
let things_waitied = 5;
let things_hurried = 1;


let AppComponent = React.createClass({
  Search: function(num) {
    if(num === '-1'){
      now_page = 0;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">Lanciy\'s </span>to do list';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'This is a stupid app';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'You can click the bottom left';
      ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'Or add details in input box here';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'Or add details in input box here'}
    }
    if(num === '1'){
      now_page = 1;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lab one has been done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML= 'Eventual score : 75';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Max score : 75';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '2'){
      now_page = 2;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lab two has been done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'Phases Defused : 7';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Explosions : 3';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '3'){
      now_page = 3;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lab three has been done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'Eventual score : 60';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Max score : 60';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '4'){
      now_page = 4;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The mid exam has been done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'Eventual score : 88';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Max score : 100';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '5'){
      now_page = 5;
      let dayleft = (28 - myDate.getDate()) + 31 *  (10 - myDate.getMonth()) + 365 * (2017 - myDate.getFullYear());
      let hourleft = 24 * (dayleft - 1) +  (24 - myDate.getHours());
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lab four is waiting for being done</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML= 'Deadline : 00:00 11/28/2017';
      if (dayleft > 0){ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Days left : '+ dayleft + ' ( ' + hourleft + ' hours left )';}
      else {ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Beyond the deadline'}
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '6'){
      now_page = 6;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lab five has not been shown</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'May be shown on 11/30/2017';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Ddl may on 12/8/2017';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '7'){
      now_page = 7;
      let dayleft = (6 - myDate.getDate()) + 31 *  (11 - myDate.getMonth()) + 365 * (2017 - myDate.getFullYear());
      let hourleft = 24 * dayleft +  (15 - myDate.getHours());
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The english proficiency exam is approaching</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'Start time : 15:10 12/6/2017';
      if (hourleft > 0){ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Days left : '+ dayleft + ' ( ' + hourleft + ' hours left )';}
      else {ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Beyond the start time'}
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '8'){
      now_page = 8;
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The lab six has not been shown</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'May be shown on 12/14/2017';
      ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Ddl may on 12/25/2017';
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
    if(num === '9'){
      now_page = 9;
      let dayleft = (12 - myDate.getDate()) + 31 *  (1 - myDate.getMonth()) + 365 * (2018 - myDate.getFullYear());
      let hourleft = 24 * dayleft +  (10 - myDate.getHours());
      ReactDOM.findDOMNode(this.refs['head']).innerHTML = '<span class="headline-main">The ICS final exam is approaching</span>';
      ReactDOM.findDOMNode(this.refs['part1']).innerHTML = 'Start time : 10:10 11/12/2018';
      if (hourleft > 0){ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Days left : '+ dayleft + ' ( ' + hourleft + ' hours left )';}
      else {ReactDOM.findDOMNode(this.refs['part2']).innerHTML = 'Beyond the start time'}
      if (memory[now_page]){ReactDOM.findDOMNode(this.refs['detail']).innerHTML = memory[now_page];}
      else {ReactDOM.findDOMNode(this.refs['detail']).innerHTML = 'No detail'}
    }
  },

  Change:function(ref){
    let innerDOM = ReactDOM.findDOMNode(this.refs[ref]);
    let thingDOM = ReactDOM.findDOMNode(this.refs['thin'+ ref]);
    if  (innerDOM.innerHTML === 'Done✔'){
      innerDOM.innerHTML = 'Wait✘';
      if (thingDOM.name === 'four'){thingDOM.innerHTML = 'Lab Four';}
      if (thingDOM.name === 'five'){thingDOM.innerHTML = 'Lab Five';}
      if (thingDOM.name === 'six'){thingDOM.innerHTML = 'Lab Six';}
      if (thingDOM.name === 'english'){thingDOM.innerHTML = 'English Exam';}
      if (thingDOM.name === 'final'){thingDOM.innerHTML = 'ICS Final Exam';}
      things_waitied ++;
      ReactDOM.findDOMNode(this.refs['thing_wait']).innerHTML = 'Things Waited : ' + things_waitied;
    }
    else if  (innerDOM.innerHTML === 'Wait✘'){
      innerDOM.innerHTML = 'Hurry❤';
      things_hurried ++;
      ReactDOM.findDOMNode(this.refs['thing_hurry']).innerHTML = 'Things Hurried : ' + things_hurried;
    }
    else if  (innerDOM.innerHTML === 'Hurry❤'){
      innerDOM.innerHTML = 'Done✔';
      if (thingDOM.name === 'four'){thingDOM.innerHTML = '<span class= "line-through">Lab Four</span>';}
      if (thingDOM.name === 'five'){thingDOM.innerHTML = '<span class= "line-through">Lab Five</span>';}
      if (thingDOM.name === 'six'){thingDOM.innerHTML = '<span class= "line-through">Lab Six</span>';}
      if (thingDOM.name === 'english'){thingDOM.innerHTML = '<span class= "line-through">English Exam</span>';}
      if (thingDOM.name === 'final'){thingDOM.innerHTML = '<span class= "line-through">ICS Final Exam</span>';}
      things_hurried --;
      things_waitied --;
      ReactDOM.findDOMNode(this.refs['thing_hurry']).innerHTML = 'Things Hurried : ' + things_hurried;
      ReactDOM.findDOMNode(this.refs['thing_wait']).innerHTML = 'Things Waited : ' + things_waitied;
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
      <div ref="app">
        <div className="sidebar jsc-sidebar">
          <ul className="sidebar-list">
            <li><a href="#" ref="g1" style={{float:'right'}} >Done✔</a></li>
            <li><a href="#" ref="thing1" onClick={this.Search.bind(this,'1')}><span style={{textDecoration: 'line-through'}}>Lab One</span></a></li>
            <li><a href="#" ref="g2" style={{float:'right'}} >Done✔</a></li>
            <li><a href="#" ref="thing2" onClick={this.Search.bind(this,'2')}><span style={{textDecoration: 'line-through'}}>Lab Two</span></a></li>
            <li><a href="#" ref="g3" style={{float:'right'}} >Done✔</a></li>
            <li><a href="#" ref="thing3" onClick={this.Search.bind(this,'3')}><span style={{textDecoration: 'line-through'}}>Lab Three</span></a></li>
            <li><a href="#" ref="g4" style={{float:'right'}} >Done✔</a></li>
            <li><a href="#" ref="thing4" onClick={this.Search.bind(this,'4')}><span style={{textDecoration: 'line-through'}}>ICS Mid Exam</span></a></li>
            <li><a href="#" ref="g5" onClick={this.Change.bind(this,'g5')} style={{float:'right'}} >Hurry❤</a></li>
            <li><a href="#" name="four" ref="thing5" onClick={this.Search.bind(this,'5')}>Lab Four</a></li>
            <li><a href="#" ref="g6" onClick={this.Change.bind(this,'g6')} style={{float:'right'}} >Wait✘</a></li>
            <li><a href="#" name="five" ref="thing6" onClick={this.Search.bind(this,'6')}>Lab Five</a></li>
            <li><a href="#" ref="g7" onClick={this.Change.bind(this,'g7')} style={{float:'right'}} >Wait✘</a></li>
            <li><a href="#" name="english" ref="thing7" onClick={this.Search.bind(this,'7')}>English Exam</a></li>
            <li><a href="#" ref="g8" onClick={this.Change.bind(this,'g8')} style={{float:'right'}} >Wait✘</a></li>
            <li><a href="#" name="six" ref="thing8" onClick={this.Search.bind(this,'8')}>Lab Six</a></li>
            <li><a href="#" ref="g9" onClick={this.Change.bind(this,'g9')} style={{float:'right'}} >Wait✘</a></li>
            <li><a href="#" name="final" ref="thing9" onClick={this.Search.bind(this,'9')}>ICS Final Exam</a></li>
            <br />
            <li><a ref ="thing_hurry" style={{textAlign:'center'}}>{'Things Hurried : 1'}</a></li>
            <li><a ref ="thing_wait" style={{textAlign:'center'}}>{'Things Waited : 5'}</a></li>
            <br />
            <li><a href="#" onClick={this.Search.bind(this,'-1')} style={{textAlign:'center'}}>Home</a></li>
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
      <p style={{float:'right'}}>Creator : Lanciy</p>
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
