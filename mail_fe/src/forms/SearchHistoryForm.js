import React from 'react';

import TextBox from '../components/TextBox';
import TextArea from '../components/TextArea';
import Button from '../components/Button';


export default class SearchHistoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      to_mail: '',
      from_mail: '',
      detail: ''
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

  clearInput() {
    this.setState({
      subject: '',
      to_mail: '',
      from_mail: '',
    })
  }

  searchData(state) {
    var uri = "http://127.0.0.1:8080/api/v1/mail/" + this.getQuerySet(state)
    var fetchData = {method: 'GET'}
    
    this.setState({
      detail: ''
    })

    fetch(uri, fetchData)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length > 0)
          var result = data.map(x => 
              "Date: " + x.timestamp + 
              "\tSub: " + x.subject + "\n" +
              "To: "+ x.to_mail + 
              "\tFrom: "+ x.from_mail + 
              "\tSend: " + x.status
            ).join("\n\n")
        else
          var result = "Not found."
        this.setState({
          detail: result
        })
        this.clearInput()
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchHistoryForm">
        <TextBox type={'text'} name={'subject'} value={this.state.subject} required={false} readOnly={false} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <TextBox type={'email'} name={'to_mail'} value={this.state.to_mail} required={false} readOnly={false} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <TextBox type={'email'} name={'from_mail'} value={this.state.from_mail} required={false} readOnly={false} onChange={(e, f) => {this.handleChange(e, f)}}/>
        <Button type={'submit'} value={'Search'}/>
        <TextArea rows={15} value={this.state.detail} required={false} readOnly={true} onChange={(e, f) => {this.handleChange(e, f)}}/>
      </form>
    );
  }
}