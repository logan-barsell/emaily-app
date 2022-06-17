import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import Thankyou from './Thankyou';

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
            <Route path="/" element={this.props.auth ? <Dashboard /> : <Landing />} exact />
            <Route path="/surveys" element={<Dashboard />} exact />
            <Route path="/surveys/new" element={<SurveyNew />} />
            <Route path="/thankyou" element={<Thankyou /> } />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}


export default connect(mapStateToProps, actions)(App);