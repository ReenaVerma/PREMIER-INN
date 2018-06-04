import React from 'react';
import axios from 'axios';

import Header from '../components/header';
import Navbar from '../components/Navbar';

import './index.css';

class Layout extends React.Component {

  constructor() {
    super();
    console.log('CONSTRUCTOR');

    this.state = {
      places: [],
      searchData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // COMPONENT WILL MOUNT
  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }

  // MAKE AXIOS REQUEST/COMPONENT DID MOUNT
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');

    axios.get('https://api.foursquare.com/v2/venues/explore?near=london&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044')
      .then(res => {
        console.log('DATA', res.data.response.groups[0].items);
        this.setState(
          { places: res.data.response.groups[0].items}
        );
      });
  }

  // LISTEN TO FORM ENTRY/HANDLE CHANGE
  handleChange(e) {
    this.setState({ searchData: e.target.value }, () => console.log(this.state.searchData));
  }

  // CHANGE RESULTS AND APPLY SEARCH TERM TO AXIOS REQUEST
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.searchData);
    axios.get(`https://api.foursquare.com/v2/venues/explore?near=${this.state.searchData}&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044`)
      .then(res => {
        this.setState({ places: res.data.response.groups[0].items});
        console.log(res.data.response.groups[0].items);
      });
  }


  render() {
    return(
      <div>
        <Header />
        <Navbar />
      </div>
    );
  }
}


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
