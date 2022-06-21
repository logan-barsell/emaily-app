import './surveyFormReview.css';

import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { useNavigate } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

  const navigate = useNavigate();

  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div className="entry" key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="form-review" style={{ margin: "25px auto 50px auto" }} >
      <h5>Please confirm your entries: </h5>
      <div className="entries">
        {reviewFields}
      </div>

      <button
        className="red white-text btn-flat"
        onClick={onCancel}
      >
        Go Back
      </button>
      <button
        className="teal btn right white-text"
        onClick={() => submitSurvey(formValues, navigate)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
