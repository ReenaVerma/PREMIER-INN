import React from 'react';
// import axios from 'axios';

const Results = ({places}) => {

  // for(var i = 0; i < photos.length; i++) {
  //   const photosID = photos[i].venue.id;
  //   console.log(photos[i].venue.id);
  //
  //   axios.get(`https://api.foursquare.com/v2/venues/${photosID}/photos?client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=20130815&ll=40.7,-74`)
  //     .then(res => {
  //       console.log('IDS RES:', res.data.response.photos.items[1]);
  //       // console.log('IDS RES:', res.data.response.photos.items[1].prefix.concat(res.data.response.photos.items[1].suffix));
  //     });
  // }



  return (
    <section className="">
      <h2 className="title has-text-centered">Heres what we recommend in London</h2>
      <div className="columns is-multiline">
        {places.map((place, i) => <div className="column is-one-quarter" key={i}>
          <ul>
            <li>
              <div className="card-image">
                <figure className="image">
                  <h2 className="has-text-centered has-text-grey">Venue: {place.venue.name}</h2>
                  <h2 className="has-text-centered has-text-grey">Category: {place.venue.categories[0].pluralName}</h2>
                  <h2 className="has-text-centered has-text-grey">Why?: {place.reasons.items[0].summary}</h2>
                  <p className="has-text-centered has-text-link">Address: {place.venue.location.formattedAddress}</p>
                  <p className="has-text-centered has-text-link">ID: {place.venue.id}</p>
                  {/* <img className="animated rotateIn" src={place.venue.categories[0].icon.prefix.concat(place.venue.categories[0].icon.suffix)}/> */}
                </figure>
              </div>
            </li>
          </ul>
        </div>)}
      </div>
    </section>
  );
};

export default Results;
