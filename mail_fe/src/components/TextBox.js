import React from 'react';


export default class TextBox extends React.Component {
  render() {
    return (
        <div className="textbox">
          <div className="title"> 
            {this.props.name}
          </div>  
          <div className="input"> 
            <input type="text" value={this.props.value} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
          </div>  
        </div>
    );
  }
}