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
  render() {
    return (
        <label>
          {this.props.name}
          <textarea rows={15} value={this.props.text} onChange={(e) => {this.props.onChange(e, this.props.name)}} />
        </label>
    );
  }
}


class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to_mail: '',
      subject: '',
      text: '',
      from_mail: '',
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
    this.sendEmail(this.state)
    event.preventDefault();
  }

  sendEmail(state) {
    var uri = "http://127.0.0.1:8000/api/v1/mail/"
    var bodyData = {
        from_mail : state.from_mail,
        to_mail : state.to_mail,
        subject : state.subject,
        text : state.text
      }
    var fetchData = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      }
   
    fetch(uri, fetchData)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.message);
        if (data.message)
          alert(data.message);
        else
          alert(JSON.stringify(data))
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextBox name={'to_mail'} value={this.state.to_mail} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextBox name={'subject'} value={this.state.subject} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextArea name={'text'} value={this.state.text} onChange={(e, f) => {this.handleChange(e, f)}}/> <br/>
        <TextBox name={'from_mail'} value={this.state.from_mail} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

class SearchHistoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      to_mail: '',
      from_mail: '',
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
    this.searchData(this.state)
    event.preventDefault();
  }

  getQuerySet(state) {
    var filter = "?"
    if (state.subject.length > 0)
      filter += "subject=" + state.subject + "&"
    if (state.to_mail.length > 0)
      filter += "to_mail=" + state.to_mail + "&"
    if (state.from_mail.length > 0)
      filter += "from_mail=" + state.from_mail + "&"
    return filter
  }

  searchData(state) {
    var uri = "http://127.0.0.1:8000/api/v1/mail/" + this.getQuerySet(state)
    var fetchData = {method: 'GET'}
   
    fetch(uri, fetchData)
      .then(response => {
        return response.json();
      })
      .then(data => {
        state.detail = data
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextBox name={'subject'} value={this.state.subject} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <TextBox name={'to_mail'} value={this.state.to_mail} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <TextBox name={'from_mail'} value={this.state.from_mail} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <input type="submit" value="Search" /> <br/> <br/>
        <TextArea value={this.state.detail} onChange={(e, f) => {this.handleChange(e, f)}} readonly/>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-title">Email Client</h1>
        </div>
      
        <h1 className="app-intro">Email Sender</h1>
        <div className="app-content">
          <EmailForm />
        </div>
      
        <hr />

        <h1 className="app-intro">Email History</h1>
        <div className="app-content">
          <SearchHistoryForm />
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
