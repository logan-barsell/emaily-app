import './landing.css';
import React from 'react';

const Landing = () => {
  return (
    <div className="landing">


      <div className="container">
        <div className="header center"><img src="./mail.png" alt="email icon" /></div>
        <div className="row center">
          <h5 className="header col s12 light">Collect feedback from your users.</h5>
          <p>Send custom surveys to a list of recipients, then recieve their answers back on your dashboard!</p>
        </div>
        <div className="row center">
          <a
            href="/auth/google"
            id="download-button"
            className="google btn-large waves-effect waves-light teal truncate">
            <img className="googleBtn" src="./google.png" height="20px" width="20px" alt="google icon" />
            Login with Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;