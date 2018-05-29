import React from 'react';

import TextBox from '../components/TextBox';
import TextArea from '../components/TextArea';


export default class EmailForm extends React.Component {
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