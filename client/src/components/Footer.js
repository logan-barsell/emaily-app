import './footer.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

  renderSteps() {
    return !this.props.auth ?
      (
        <div className="col s12 center steps">
          <h5 className="white-text">It's simple and easy:</h5>
          <div className="stepsSub grey-text text-lighten-4">
            <div className="number">1</div><p> Fill out a survey form</p>
            <div className="number">2</div><p> Send to desired recipients</p>
            <div className="number">3</div><p> Get feedback!</p>
          </div>
        </div>
      )
      :
      null;
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            {this.renderSteps()}
            <div className="col s12 icon-attr">
              <h5 className="white-text">iSurveyU</h5>
              <ul>
                <li><a>More info on GitHub <i className="material-icons tiny">arrow_forward</i></a></li>
                <li>Other projects  <i className="material-icons tiny">arrow_forward</i></li>
              </ul>
            </div>
            <div className="col s12 icon-attr">
              <h5 className="white-text">Attributes</h5>
              <ul>
                <li>
                  <a
                    href="https://www.flaticon.com/free-icons/email"
                    title="email icons"
                  >
                    Email icons created by Uniconlabs - Flaticon
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flaticon.com/free-icons/google"
                    title="google icons"
                  >
                    Google icons created by Freepik - Flaticon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by <a className="madeBy" href="http://loganbarsell.com">Logan Barsell</a>
          </div>
        </div>
      </footer>
    );
  }
};

function mapStateToProps({ auth }) {
  return { auth };
};

export default connect(mapStateToProps)(Footer);

