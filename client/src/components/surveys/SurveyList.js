import './surveyList.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyDelete from './SurveyDelete';
import { PieChart } from 'react-minimal-pie-chart';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  noSurveys() {
    return (
      <div className="no-surveys center">
        <h5>You have no surveys!</h5>
        <a href="/surveys/new" className="btn btn-large red">Create Survey <i className="material-icons">add</i></a>
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
                <span>Last responded:</span>
                {survey.lastResponded ? new Date(survey.lastResponded).toLocaleDateString() : ' Never'}</p>
            </div>
          </div>
          <div className="card-action">

            {
              survey.no && survey.yes ?
                <PieChart
                  data={[
                    { title: 'Yes', value: 2, color: 'teal' },
                    { title: 'No', value: 1, color: 'red' }
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
            <a className="yes">Yes: {survey.yes}</a>
            <a className="no">No: {survey.no}</a>
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

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);