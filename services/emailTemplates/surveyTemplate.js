const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="background-color: indianred; padding: 10px">
          <a style="text-decoration: none; color: white; font-size: 22px; font-weight: 900; text-shadow: 2px 0px 0px teal;" target="_blank" href="isurveyu.com">iSurveyU</a>
        </div>
        <div style="text-align: center; background-color: cadetblue; color: white; padding: 25px 50px">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <h2 style="margin: 45px auto 0px auto;">${survey.body}</h2>
          <div>
            <table cellspacing="30" cellpadding="0" style="margin: auto;">
              <tr>
                <td style="border-radius: 2px;" bgcolor="teal">
                  <a target="_blank" style="padding: 8px 20px; border: 1px solid teal;border-radius: 2px;font-family: Arial, Helvetica, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;" href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes        
                  </a>
                </td>
                <td style="border-radius: 2px;" bgcolor="indianred">
                  <a target="_blank" style="padding: 8px 23px; border: 1px solid indianred;border-radius: 2px;font-family: Arial, Helvetica, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;" href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No        
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </body>
    </html>
  `;
};