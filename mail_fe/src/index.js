import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import EmailForm from './forms/EmailForm';
import SearchHistoryForm from './forms/SearchHistoryForm';


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
