import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path="/surveys" element={<Dashboard />} exact />
            <Route path="/surveys/new" element={<SurveyNew />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}


export default connect(null, actions)(App);