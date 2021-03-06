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
      photos: [],
      city: 'London'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // COMPONENT WILL MOUNT
  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }


  //
  componentDidMount() {
    axios.get('https://api.foursquare.com/v2/venues/explore?near=london&&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044&venuePhotos=1')
      .then((res) => {
        // RES VENUE DATA IS STORED IN PLACES
        this.setState(
          { places: res.data.response.groups[0].items.slice(0,12)});
        console.log(res.data.response.groups[0].items.slice(0,12));

        // LOOP THROUGH PLACES RES AND PULL OUT THE VENUE ID.
        for(var i = 0; i < this.state.places.length; i++) {
          const photosID = this.state.places[i].venue.id;
          console.log(this.state.places[i].venue.id);

          // NOW TAKE THE VENUE ID AND PLACE IT IN THIS SECOND API REQUEST
          return axios.get(`https://api.foursquare.com/v2/venues/${photosID}/photos?client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=20130815&ll=40.7,-74`);
        }
      })
      // THEN CONSOLE LOG THIS PHOTO RES DATA.
      .then((res) => {
        console.log('IDS RES:', res.data.response.photos.items[1]);
        // console.log('IDS RES:', res.data.response.photos.items[1].prefix.concat(res.data.response.photos.items[1].suffix));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // MAKE AXIOS REQUEST/COMPONENT DID MOUNT
  // componentDidMount() {
  //   console.log('COMPONENT DID MOUNT');
  //
  //   axios.get('https://api.foursquare.com/v2/venues/explore?near=london&&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044&venuePhotos=1')
  //     .then(res => {
  //       // console.log('DATA', res.data.response.groups[0].items);
  //       this.setState(
  //         { places: res.data.response.groups[0].items.slice(0,12)});
  //       this.setState(
  //         { photos: res.data.response.groups[0].items.slice(0,12)});
  //     });
  // }

  // MAKE AXIOS REQUEST/COMPONENT DID MOUNT
  // componentDidMount() {
  //   console.log('COMPONENT DID MOUNT');
  //
  //   axios.get('https://api.foursquare.com/v2/venues/explore?near=london&&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044&venuePhotos=1')
  //     .then(res => {
  //       // console.log('DATA', res.data.response.groups[0].items);
  //       this.setState(
  //         { places: res.data.response.groups[0].items.slice(0,12)});
  //       this.setState(
  //         { photos: res.data.response.groups[0].items.slice(0,12)});
  //     });
  // }

  

  // LISTEN TO FORM ENTRY/HANDLE CHANGE
  handleChange(e) {
    this.setState({ searchData: e.target.value }, () => console.log(this.state.searchData));
  }

  // CHANGE RESULTS AND APPLY SEARCH TERM TO AXIOS REQUEST
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.searchData);
    this.setState({ city: this.state.searchData });
    axios.get(`https://api.foursquare.com/v2/venues/explore?near=${this.state.searchData}&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044`)
      .then(res => {
        this.setState({ places: res.data.response.groups[0].items.slice(0,12)});
        // console.log(res.data.response.groups[0].items);
      });
  }


  render() {
    return(
      <div className="animated fadeIn">

        <Navbar />
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results
          places={this.state.places}
          photos={this.state.photos}
          city={this.state.city}
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
