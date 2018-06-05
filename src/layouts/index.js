import React from 'react';
import axios from 'axios';

import Header from '../components/header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';

import './index.css';

class Layout extends React.Component {

  constructor() {
    super();
    console.log('CONSTRUCTOR');

    this.state = {
      places: [],
      searchData: '',
      photos: []
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

    axios.get('https://api.foursquare.com/v2/venues/explore?near=london&&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044&venuePhotos=1')
      .then(res => {
        console.log('DATA', res.data.response.groups[0].items);
        this.setState(
          { places: res.data.response.groups[0].items.slice(0,12)});
        console.log('PLACE ID', this.state.places[0].venue.id);
        // this.setState(
        //   { photos: this.state.places[0].venue.id})

      });


    // CALL FOR ID TO PHOTOS
    // axios.get('https://api.foursquare.com/v2/venues/4b4e7802f964a520dfee26e3/photos?client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=20130815&ll=40.7,-74')
    //   .then(res => {
    //     console.log('DATA', this.state.places[0].venue.id);
    //     this.setState(
    //       { places: res.data.response.groups[0].items.slice(0,12)}
    //     );
    //   });
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
        this.setState({ places: res.data.response.groups[0].items.slice(0,12)});
        console.log(res.data.response.groups[0].items);
      });
  }


  render() {
    return(
      <div>

        <Navbar />
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results
          places={this.state.places}
        />
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
