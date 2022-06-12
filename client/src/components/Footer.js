import './footer.css';
import React from 'react';

const Footer = () => {
  return (


    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12 center steps">
            <h5 className="white-text">It's simple and easy:</h5>
            <div className="grey-text text-lighten-4">
              <p><div className="number">1</div> Fill out a survey form</p>
              <p><div className="number">2</div> Send to desired recipients</p>
              <p><div className="number">3</div> Get feedback!</p>
            </div>

          </div>
          <div className="col l3 s12 icon-attr">
            <h5 className="white-text">Attributes</h5>
            <ul>
              <li>
                <a
                  href="https://www.flaticon.com/free-icons/email"
                  title="email icons">
                  Email icons created by Uniconlabs - Flaticon
                </a>
              </li>
              <li>
                <a
                  href="https://www.flaticon.com/free-icons/google"
                  title="google icons">
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
  )
};

export default Footer;

