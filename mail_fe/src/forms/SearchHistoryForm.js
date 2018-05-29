import React from 'react';

import TextBox from '../components/TextBox';
import TextArea from '../components/TextArea';


export default class SearchHistoryForm extends React.Component {
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