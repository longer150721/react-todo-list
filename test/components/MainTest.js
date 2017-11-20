/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Main from 'components/Main';

describe('MainComponent', function () {

  beforeEach(function () {
    this.MainComponent = createComponent(Main);
  });

  it('should have its component name as expected', function () {
    expect(this.MainComponent.ref).to.equal('app');
    expect(this.MainComponent.type).to.equal('div');
    expect(this.MainComponent.props.children[0].type).to.equal('div');
    expect(this.MainComponent.props.children[0].props.className).to.equal('sidebar jsc-sidebar');
    expect(this.MainComponent.props.children[0].props.children.type).to.equal('ul');
    expect(this.MainComponent.props.children[0].props.children.props.className).to.equal('sidebar-list');
    expect(this.MainComponent.props.children[1].type).to.equal('div');
    expect(this.MainComponent.props.children[1].props.className).to.equal('main-content');
  });

});
