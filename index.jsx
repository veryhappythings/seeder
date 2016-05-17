import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'react-sortablejs';
import update from 'react-addons-update';

import SeedList from './js/seedlist.jsx'
import Groups from './js/groups.jsx'

require("./index.css");


class App extends React.Component {
  update() {
    this.refs.groups.setState({
      items: this.refs.seedlist.state.items
    });
  }

  render() {
    return (
      <div>
        <SeedList ref="seedlist" app={this} />
        <Groups ref="groups" app={this} />
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
