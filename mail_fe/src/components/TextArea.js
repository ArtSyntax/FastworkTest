import React from 'react';


export default class TextArea extends React.Component {
  render() {
    return (
    	<div>	
	    	<div className="title">	
	          	<label>{this.props.name}</label>
	    	</div>	
	    	<div className="input">	
	          <textarea rows={7} value={this.props.value} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
	        </div>
        </div>
    );
  }
}