import './surveyList.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyDelete from './SurveyDelete';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
    console.log(this.props.surveys)
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}:
              <SurveyDelete survey={survey} />
            </span>

            <p className="body">{survey.body}</p>
            <div className="dates">
              <p className="left">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
              <p className="right">Last responded: {new Date(survey.lastResponded).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);