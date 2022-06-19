import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import requireAuth from '../requireAuth';
import { compose } from 'redux';

class SurveyNew extends Component {

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
};

export default compose(
  reduxForm({ form: 'surveyForm' })
)(requireAuth(SurveyNew))