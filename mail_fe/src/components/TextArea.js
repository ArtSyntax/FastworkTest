import React from 'react';


export default class TextArea extends React.Component {
  render() {
    return (
        <label>
          {this.props.name}
          <textarea rows={15} value={this.props.text} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
        </label>
    );
  }
}