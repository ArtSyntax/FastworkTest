import React from 'react';


export default class TextArea extends React.Component {
  

  render() {
    return (
      <div className="textarea">
        <div className="title">
          <label>{this.props.name}</label>
        </div>
        <div className="input">
          <textarea rows={this.props.rows} value={this.props.value} onChange={(e) => {this.props.onChange(e, this.props.name)}} required={this.props.required} readOnly={this.props.readOnly}/>
        </div>
      </div>
    );
  }
}