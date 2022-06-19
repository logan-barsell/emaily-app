import './thankyou.css';

import React from 'react';

const Thankyou = () => {
  return (
    <div className="container thankyou center">
      <span class="large material-icons">
        sentiment_very_satisfied
      </span>
      <h4 className="response center white-text">Thanks for your response!</h4>
      <div className="row center">
        <h5 className="header col s12 light">Your feedback is important, and we appreciate you taking the time to answer.</h5>
      </div>
      <a
        href="/"
        className="btn-large waves-effect waves-light teal truncate">
        Make a Survey!
      </a>
    </div>
  );
}

export default Thankyou;