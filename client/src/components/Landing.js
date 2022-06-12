import './landing.css';
import React from 'react';

const Landing = () => {
  return (
    <div className="landing">


      <div className="container">
        <div className="header center"><img src="./mail.png" /></div>
        <div className="row center">
          <h5 className="header col s12 light">Collect feedback from your users.</h5>
          <p>Send custom surveys to a list of recipients, then recieve their answers back on your dashboard!</p>
        </div>
        <div className="row center">
          <a
            href="http://materializecss.com/getting-started.html"
            id="download-button"
            className="btn-large waves-effect waves-light teal">
            Log in with Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;