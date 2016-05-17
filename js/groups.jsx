import React from 'react';

export default class Groups extends React.Component {
  constructor() {
    super()
    this.state = {
      items: ["Dave", "Tom", "Ben", "Egg"],
      groups: 2
    };
  }

  handleChange(event) {
    this.setState({groups: parseInt(event.target.value)});
  }

  render() {
    var seeds = [];
    var groups = [];
    for (var i = 0; i < this.state.groups; i++) {
      groups.push([]);
    }
    this.state.items.map((val, key) => {
      groups[key % groups.length].push(
        (<li key={key}>{val}</li>)
      )
    });

    var seeds = groups.map((group, key) => {
      return (
        <div key={key}>
          <p>{key + 1}</p>
          <ol>
          {group}
          </ol>
          </div>
      )
    })
    return (
      <div>
        <div>
          <span>Number of groups: </span>
          <input
            type="range"
            id="num-groups"
            ref="numgroups"
            min="1"
            max="33"
            value={this.state.groups}
            onChange={this.handleChange.bind(this)}
          />
          <span>{this.state.groups}</span>
        </div>
        <ol>
          {seeds}
        </ol>
      </div>
    )
  }
}

