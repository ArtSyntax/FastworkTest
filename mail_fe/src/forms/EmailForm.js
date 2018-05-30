import React from 'react';

import TextBox from '../components/TextBox';
import TextArea from '../components/TextArea';
import Button from '../components/Button';


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

  clearInput() {
    this.setState({
      subject: '',
      to_mail: '',
      from_mail: '',
      detail: ''
    })
  }

  sendEmail(state) {
    var uri = "http://127.0.0.1:8080/api/v1/mail/"
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
        if (data.message){
          this.clearInput;
          alert(data.message);
        }
        else
          alert(JSON.stringify(data))
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="emailForm">
        <TextBox name={'to_mail'} value={this.state.to_mail} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <TextBox name={'subject'} value={this.state.subject} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <TextArea rows={10} name={'text'} value={this.state.text} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <TextBox name={'from_mail'} value={this.state.from_mail} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <br />
        <Button type={'submit'} value={'Send'}/>

      </form>
    );
  }
}