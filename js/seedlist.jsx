import React from 'react';
import Sortable from 'react-sortablejs';
import update from 'react-addons-update';


class Item extends React.Component {
  remove() {
    this.props.parent.remove(this.props.val);
  }

  render() {
      return (
        <li data-id={this.props.val}>
          <span className="name">{this.props.val}</span>
          <button className="delete-btn" onClick={this.remove.bind(this)}>X</button>
        </li>
      );
  }
}

export default class SeedList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ["Dave", "Tom"]
    };
  }

  add() {
    this.setState({
      items: this.state.items.concat(this.refs.add.value)
    }, this.updateApp);
  }

  remove(val) {
    var pos = this.state.items.indexOf(val);
    this.setState({
      items: update(this.state.items, {$splice: [[pos, 1]]})
    }, this.updateApp)
  }

  updateApp() {
    this.props.app.update();
  }

  render() {
    const simpleList = this.state.items.map((val, key) => (
      <Item key={key} val={val} parent={this} />
    ));

    return (
      <div>
        <Sortable
          className="block-list"
          onChange={(order, sortable) => {
            this.setState({ items: order }, this.updateApp);
          }}
          tag="ol"
        >
          {simpleList}
        </Sortable>

        <div>
          <input id="add-input" ref="add"/>
          <button type="button" className="btn" onClick={this.add.bind(this)}>
            Add
          </button>
        </div>
      </div>
    );
  }
};
