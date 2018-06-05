import React from 'react';
// import axios from 'axios';

const Results = ({places, city}) => {

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
    <section>
      <h3 className="title has-text-centered animated shake slow">Top 9 Recommendations for {city}</h3>
      <div className="columns is-multiline">
        {places.map((place, i) => <div className="column is-one-third" key={i}>
          <ul>
            <li>
              <div className="card-image box">
                <figure className="">
                  <img className="image" src="https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Restaurant%20at%20night_23376c1c-7d1e-4d6f-8efb-c581529540fb/Cinemagraph_plain/1280x720/cinemagraph.jpg"/>
                  <h4 className="has-text-left purple">{place.venue.name}</h4>
                  <h5 className="has-text-left has-text-grey">Category: {place.venue.categories[0].pluralName}</h5>
                  <h5 className="has-text-left has-text-grey">Why? {place.reasons.items[0].summary}</h5>
                  <h6 className="has-text-left has-text-link">Address: {place.venue.location.formattedAddress.slice(0,4).join(', ')}</h6>
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
