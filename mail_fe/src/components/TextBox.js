import React from 'react';


export default class TextBox extends React.Component {
  render() {
    return (
        <div className="textbox">
          <div className="title"> 
            {this.props.name}
          </div>  
          <div className="input"> 
            <input type={this.props.type} value={this.props.value} onChange={(e) => {this.props.onChange(e, this.props.name)}} required={this.props.required} readOnly={this.props.readOnly} />
          </div>  
        </div>
    );
  }
}