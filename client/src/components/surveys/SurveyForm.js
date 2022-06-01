import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="surveyTitle">Title</label>
          <Field name="surveyTitle" component="input" type="text" />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);