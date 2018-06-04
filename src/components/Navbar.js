import React from 'react';
import Link from 'gatsby-link';
// import 'bulma';


class Navbar extends React.Component {

  state = {
    navIsOpen: false
  }


  handleToggle =() => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    if(this.state.navIsOpen) this.setState({ navIsOpen: false });
  }


  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            PREMIER INN
          </Link>
          <div
            className={`navbar-burger ${this.state.navIsOpen ? 'is-active' : ''}`}
            onClick={this.handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          {/* when active is open */}
          <div className="navbar-end">
            <Link className="navbar-item" to="/">Hotels</Link>
            <Link className="navbar-item" to="/">My Booking</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
