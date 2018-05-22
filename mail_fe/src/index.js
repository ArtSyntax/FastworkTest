import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export class TextBox extends React.Component {
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
    this.callApi(this.state)
    event.preventDefault();
  }

  sendEmail() {
    const api_key = "4d2dadd776d98dfbf4329831f2a68c49eddbd707"
    const SparkPost = require('sparkpost');
    const client = new SparkPost(api_key);

    client.transmissions.send({
        options: {
          sandbox: true
        },
        content: {
          from: 'testing123@sparkpostbox.com',
          subject: 'Hello, World!',
          html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
        },
        recipients: [
          {address: 'arttra_eagleb@hotmail.com'}
        ]
      })
      .then(data => {
        console.log('Woohoo! You just sent your first mailing!');
        console.log(data);
      })
      .catch(err => {
        console.log('Whoops! Something went wrong');
        console.log(err);
      });
  }

  callApi(state) {
    // this.sendEmail()

    let uri = "https://api.sparkpost.com/api/v1/transmissions"
    var bodyData = {
      options : { "sandbox": true },
      content : {
        from: "thanyavuth@sparkpostbox.com",
        subject: "Test",
        text: "123 Sword of Omens, give me sight BEYOND sight"
      },
      recipients : [{ "address": "arttra_eagleb@hotmail.com" }],
    }

    var fetchData = {
      method: 'POST',
      headers: {
        "Authorization": "4d2dadd776d98dfbf4329831f2a68c49eddbd707",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
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
