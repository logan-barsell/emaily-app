import './header.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import M from 'materialize-css';

class Header extends Component {

  componentDidMount() {
    const options = {};
    M.Sidenav.init(this.Sidenav, options);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return [
          <li key='1'><Payments /></li>,
          <li key='3' style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='2'><a href="/api/logout">Log Out</a></li>
        ]
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              iSurveyU
            </Link>
            <a href="#" data-target="sideNav" className="right sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-small-only">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
        <ul ref={Sidenav => { this.Sidenav = Sidenav }} className="sidenav" id="sideNav">
          {this.renderContent()}
        </ul>
      </>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);