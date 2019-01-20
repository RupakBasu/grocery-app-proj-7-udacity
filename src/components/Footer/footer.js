import React from 'react';


class Footer extends React.Component {
  render() {
    return(
      <div>
        <div className="ending">
          <h2>Let's Keep in Touch!</h2>
          <div className = "contact-info">
              <a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span> </a>
              <a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i> <span className="sr-only">LinkedIn</span></a>
              <a href="#" target="_blank"><i className="fab fa-github-alt" aria-hidden="true"></i><span className="sr-only">Github</span></a>
          </div>
          <p>Copyright 2019 by Rupak Basu</p>
        </div>
      </div>
    )
  }
}

export default Footer;
