import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  submit = values => {
    console.log(values.surveyTitle);
  }

  render() {
    return (
      <div>
        SurveryNew
        <SurveyForm onSubmit={this.submit} />
      </div>
    );
  }
};

export default SurveyNew;