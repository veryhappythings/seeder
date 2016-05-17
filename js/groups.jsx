import React from 'react';

export default class Groups extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    };
  }
  render() {
    var seeds = this.state.items.map((val, key) => (
      <li key={key}>{val}</li>
    ));
    return (
      <ol>
        {seeds}
      </ol>
    )
  }
}
