import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

import Main from './components/main/';
import Login from './components/login/';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user: null,
      auth: false
    }
  }

  render () {

    if (!this.state.user || !this.state.auth) {
      return <Login />
    }

    return <div></div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
