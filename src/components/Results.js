import React from 'react';

const Results = ({places}) => {

  // console.log('from loaders', places);
  return (


    <section>
      <h2 className="title">Heres what we recommend in London</h2>
      <div className="columns is-multiline">
        {places.map((place, i) => <div className="column is-one-quarter" key={i}>
          <ul>
            <li>
              <div className="card-image">
                <figure className="image">
                  {/* <h1 className="has-text-centered has-text-primary" >chart ranking: {giffies.indexOf(giffy) +1 }</h1> */}
                  <h2 className="has-text-centered has-text-grey">Venue: {place.venue.name}</h2>
                  <h2 className="has-text-centered has-text-grey">Category: {place.venue.categories[0].pluralName}</h2>
                  <h2 className="has-text-centered has-text-grey">Why?: {place.reasons.items[0].summary}</h2>
                  <p className="has-text-centered has-text-link">Address: {place.venue.location.formattedAddress}</p>
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
