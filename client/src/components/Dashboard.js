import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SurveyList from './surveys/SurveyList';
import requireAuth from './requireAuth';
import NoCredits from './NoCredits';

class Dashboard extends Component {

  renderAddButton() {
    if (this.props.auth) {
      return this.props.auth.credits ?
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link> :
        <NoCredits />
    }
  }

  render() {
    return (
      <div className="container" style={{ margin: "28px auto" }}>
        <SurveyList />
        <div className="fixed-action-btn">
          {/* <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link> */}
          {this.renderAddButton()}
        </div>
      </div>
    );
  }

};

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  connect(mapStateToProps)
)(requireAuth(Dashboard));