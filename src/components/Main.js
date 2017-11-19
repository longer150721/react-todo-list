require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

let AppComponent = React.createClass({
  Search: function(num) {
    if(num == '1'){
      let headDOM = ReactDOM.findDOMNode(this.refs['head']);
      let part1DOM = ReactDOM.findDOMNode(this.refs['part1']);
      let part2DOM = ReactDOM.findDOMNode(this.refs['part2']);
      headDOM.innerHTML = '<span class="headline-main">The lib one has been done</span>';
      part1DOM.innerHTML = 'Eventual score : 75';
      part2DOM.innerHTML = 'Max score : 75';
    }
    if(num == '2'){
      let headDOM = ReactDOM.findDOMNode(this.refs['head']);
      let part1DOM = ReactDOM.findDOMNode(this.refs['part1']);
      let part2DOM = ReactDOM.findDOMNode(this.refs['part2']);
      headDOM.innerHTML = '<span class="headline-main">The lib two has been done</span>';
      part1DOM.innerHTML = 'Phases Defused : 7';
      part2DOM.innerHTML = 'Explosions : 3';
    }
    if(num == '3'){
      let headDOM = ReactDOM.findDOMNode(this.refs['head']);
      let part1DOM = ReactDOM.findDOMNode(this.refs['part1']);
      let part2DOM = ReactDOM.findDOMNode(this.refs['part2']);
      headDOM.innerHTML = '<span class="headline-main">The lib three has been done</span>';
      part1DOM.innerHTML = 'Eventual score : 60';
      part2DOM.innerHTML = 'Max score : 60';
    }
    if(num == '4'){
      let headDOM = ReactDOM.findDOMNode(this.refs['head']);
      let part1DOM = ReactDOM.findDOMNode(this.refs['part1']);
      let part2DOM = ReactDOM.findDOMNode(this.refs['part2']);
      headDOM.innerHTML = '<span class="headline-main">The lib four is waiting for being done</span>';
      part1DOM.innerHTML = 'deadline : 11/27/2017';
      part2DOM.innerHTML = 'days left : 6';
    }
    if(num == '5'){
      let headDOM = ReactDOM.findDOMNode(this.refs['head']);
      let part1DOM = ReactDOM.findDOMNode(this.refs['part1']);
      let part2DOM = ReactDOM.findDOMNode(this.refs['part2']);
      headDOM.innerHTML = '<span class="headline-main">The lib five has not been shown</span>';
      part1DOM.innerHTML = 'may be shown on 11/30/2017';
      part2DOM.innerHTML = 'ddl may on 12/8/2017';
    }
    if(num == '6'){
      let headDOM = ReactDOM.findDOMNode(this.refs['head']);
      let part1DOM = ReactDOM.findDOMNode(this.refs['part1']);
      let part2DOM = ReactDOM.findDOMNode(this.refs['part2']);
      headDOM.innerHTML = '<span class="headline-main">The lib six has not been shown</span>';
      part1DOM.innerHTML = 'may be shown on 12/14/2017';
      part2DOM.innerHTML = 'ddl may on 12/25/2017';
    }
    if(num == '-1'){
      let headDOM = ReactDOM.findDOMNode(this.refs['head']);
      let part1DOM = ReactDOM.findDOMNode(this.refs['part1']);
      let part2DOM = ReactDOM.findDOMNode(this.refs['part2']);
      let detailDOM = ReactDOM.findDOMNode(this.refs['detail']);
      headDOM.innerHTML = '<span class="headline-main">Lanciy\'s </span>to do list';
      part1DOM.innerHTML = '这是一个很傻逼的app';
      part2DOM.innerHTML = '请点击左边的按钮';
      detailDOM.innerHTML = '在下面的输入框添加备注';
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
    let inputDOM = ReactDOM.findDOMNode(this.refs['submit']);
    let detailDOM = ReactDOM.findDOMNode(this.refs['detail']);
    detailDOM.innerHTML += inputDOM.value;
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
          <p ref="part1">这是一个很傻逼的app</p>
          <p ref="part2">请点击左边的按钮</p>
          <p ref="detail"/>
          <br/><br/><br/>
          <input ref="input" type="text" onChange={this.handleChange}/>
          <br/><br/>
          <a href="#" ref="submit" onClick={this.submit}>点击此处添加备注</a>
        </div>
      </div>
    );
  }
});

AppComponent.defaultProps = {
};

export default AppComponent;
