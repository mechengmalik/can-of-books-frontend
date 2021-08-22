import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return(
      <Navbar className="foot" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy;2021 Best Books<br></br>MalikSwayyed</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
