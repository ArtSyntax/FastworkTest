import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    debugger;
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
        <label>
          To:
          <input type="text" value={this.state.to_email} onChange={this.handleChange} />
        </label>
    );
  }
}

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    debugger;
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.subject);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          To:
          <input type="text" value={this.state.to_email} onChange={this.handleChange} />
        </label>

        <label>
          Subject:
          <input type="text" value={this.state.subject} onChange={this.handleChange} />
        </label>

        <label>
          Text:
          <textarea value={this.state.text} onChange={this.handleChange} />
        </label>
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
