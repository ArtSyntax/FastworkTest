import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label>
          {this.props.name}
          <input type="text" value={this.props.value} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
        </label>
    );
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label>
          {this.props.name}
          <textarea rows={5} value={this.props.text} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
        </label>
    );
  }
}


class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to_email: '',
      subject: '',
      text: '',
      from_email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, f) {
    this.setState({
     ...this.state,
     [f]: event.target.value
    });
  }

  handleSubmit(event) {
    // alert('An essay was submitted: ' + this.state.to_email + ' ' + this.state.subject+ ' ' +this.state.text+ ' ' +this.state.from_email);
    let uri = "https://api.cca.scale360.net/api/v1/auth/customer_request/create"
    this.callApi(uri, this.state)
    event.preventDefault();
  }

  callApi(uri, state) {
    let fetchData = {
        method: 'POST',
        headers: {
            'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMjM1YWZiYzItOWQ1MC00NTY0LTlmNTgtMDlkZmRlMzA2MTJkIiwidWlkIjoxLCJleHAiOjE1MjY4NzY0ODB9.1Sktlci5GHrduSfXCTKU_LlGfFz3-pO_det2Pz3udN0',
            'X-CorrelationId':'CCA-BACKOFFICE',
            'X-AppId' : 'CCA-REGIS',
            'Content-Type' : 'application/json'
        },
        // body: JSON.stringify(state.to_email)
        body: '{"personaId": "64ca34fd-1c94-4149-a2d6-e25fe5e7c56e", "customerId": "user:736e5876-91cc-4f45-b373-1594f2ce73e5", "type": "CHAT", "channel": "MOBILE APPLICATION" }'
    }

    fetch(uri, fetchData)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      alert(myJson.data.customerRequestId)
    })
    .catch(e => alert(e))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextBox name={'to_email'} value={this.state.to_email} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextBox name={'subject'} value={this.state.subject} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextArea name={'text'} value={this.state.text} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextBox name={'from_email'} value={this.state.from_email} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <EmailForm />
        </div>
        <div className="app-content">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
