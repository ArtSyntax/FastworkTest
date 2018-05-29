import React from 'react';


export default class TextBox extends React.Component {
  render() {
    return (
        <label>
          {this.props.name}
          <input type="text" value={this.props.value} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
        </label>
    );
  }
}