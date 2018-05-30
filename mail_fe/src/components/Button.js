import React from 'react';


export default class Button extends React.Component {
  render() {
    return (
        <div className="button">
          <input type={this.props.type} value={this.props.value} />
        </div>
    );
  }
}