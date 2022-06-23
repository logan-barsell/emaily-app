import './surveyList.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSurveys } from '../../actions';
import SurveyDelete from './SurveyDelete';
import { PieChart } from 'react-minimal-pie-chart';
import NoCredits from '../NoCredits';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderAddButton() {
    if (this.props.auth) {
      return this.props.auth.credits ?
        <Link
          to="/surveys/new"
          className="btn btn-large red"
        >Create Survey <i className="material-icons">add</i>
        </Link> :
        <>
          <a
            href="#!"
            data-target="no-credits"
            className="btn btn-large red modal-trigger"
          >Create Survey <i className="material-icons">add</i>
          </a>
          <NoCredits />
        </>
    }
  }

  noSurveys() {
    return (
      <div className="no-surveys center">
        <h5>You have no surveys!</h5>
        {this.renderAddButton()}

      </div>
    );
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="survey card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title survey-title">
              {survey.title}:
              <SurveyDelete survey={survey} />
            </span>
            <p className="body">{survey.body}</p>
            <div className="dates">
              <p className="left"><span>Sent on:</span> {new Date(survey.dateSent).toLocaleDateString()}</p>
              <p className="right">
                <span>Last responded: </span>
                {survey.lastResponded ? new Date(survey.lastResponded).toLocaleDateString() : 'Never'}</p>
            </div>
          </div>
          <div className="card-action">

            {
              survey.no || survey.yes ?
                <PieChart
                  data={[
                    { title: 'Yes', value: survey.yes, color: 'teal' },
                    { title: 'No', value: survey.no, color: 'red' }
                  ]}
                  label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                  labelPosition={110}
                  labelStyle={{ fontSize: '8px', color: 'darkslategrey' }}
                  lengthAngle={360}
                  segmentsShift={0}
                  lineWidth={20}
                  paddingAngle={0}
                  radius={40}
                  startAngle={90}
                  viewBoxSize={[100, 100]}
                  style={{ height: '150px' }}

                />
                :
                <div className="no-data">
                  <h6>No data yet!</h6>
                  <p>Waiting on survey results...</p>
                </div>
            }

          </div>

          <div className="card-action row YnN">
            <div className="col s6">
              <a className="yes right">Yes: {survey.yes}</a>
            </div>

            <div className="col s6">
              <a className="no left">No: {survey.no}</a>
            </div>

          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.surveys.length ? this.renderSurveys() : this.noSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys, auth }) {
  return { surveys, auth };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);