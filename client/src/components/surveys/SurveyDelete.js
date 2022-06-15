import './surveyDelete.css';

import React, { Component } from "react";
import M from 'materialize-css';


class SurveyDelete extends Component {

  componentDidMount() {
    const options = {};
    M.Modal.init(this.Modal, options);
  }

  modalId = `#${this.props.survey._id}`;
  deleteRoute = `api/deleteSurvey/${this.props.survey._id}`;



  render() {
    return (
      <>
        <a href={this.modalId} className="modal-trigger">
          <i className="material-icons right delete">delete</i>
        </a>

        <div id={this.props.survey._id} className="modal" ref={Modal => { this.Modal = Modal }}>
          <div className="modal-content">
            <h4>Delete: <span>{this.props.survey.title}</span></h4>
            <p>Are you sure?</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close  btn-flat grey white-text"

            >
              Cancel
            </a>
            <a
              href={this.deleteRoute}
              className="modal-close btn-flat red white-text"
            >
              Delete
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default SurveyDelete;