import React from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';

import axios from 'axios';

import Header from '../components/header';
import './index.css';

class Layout extends React.Component {

  constructor() {
    super();
    console.log('CONSTRUCTOR');

    this.state = {
      places: [],
      searchData: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // COMPONENT WILL MOUNT
  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }

  // FOURSQUARE COMPONENT DID MOUNT
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');

    axios.get('https://api.foursquare.com/v2/venues/explore?near=london&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044')
      .then(res => {
        console.log('data', res.data.response.groups[0].items);
        this.setState(
          { places: res.data.response.groups[0].items}
        );
      });
  }



  render() {
    return(

      <div>
        <Header />


      </div>



    );
  }

}

// Layout.propTypes = {
//   children: PropTypes.func
// };

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
