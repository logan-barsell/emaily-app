import './noCredits.css';

import React, { Component } from "react";
import M from 'materialize-css';
import Payments from './Payments';


class NoCredits extends Component {

  componentDidMount() {
    const options = {};
    M.Modal.init(this.Modal2, options);
  }



  modalId = 'no-credits';

  render() {
    return (
      <div className="no-credits">
        <a href="#!" data-target={this.modalId} className="modal-trigger btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </a>

        <div id={this.modalId} className="modal" ref={Modal2 => { this.Modal2 = Modal2 }}>
          <div className="modal-content">
            <h4>Not enough credits!</h4>
            <p>You need one credit per survey.</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close  btn-flat grey white-text"

            >
              Nevermind
            </a>
            <Payments />
          </div>
        </div>
      </div>
    );
  }
};

export default NoCredits;