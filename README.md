
# Premier Inn Code Test (Responsive)
<p align="center"><img src="https://i.imgur.com/QUtym7s.jpg" width="90%"></p>

## URLS:
There are two pages when this test:
<ul>
  <li>Live - I have deployed a live working version of this code test to Github Pages:
  <br /> https://reenaverma.github.io/.

  </li>
  <li>I have two Github repos for this code test.  One where I built the majority of my app:
  <br>https://github.com/ReenaVerma/PREMIER-INN
  </li>

  <li>And the second repo, where I had to deploy to reenaverma.github.io:
  https://github.com/ReenaVerma/reenaverma.github.io  <em>(This URL was occupied with another test up until yesterday)<em/>.
</ul>

## Client Side ReactJS Set Up:

<ul>
  <li>This app has been built using <strong>ReactJS, CSS and Bulma</strong>.</li>
  <li>I have also used <strong>Gatsby's starter pack</strong>, which saves time on config/dependencies setup.
  <li>I've also used CDNs for <strong>Bulma</strong> and <strong>Animate.css</strong></li>
  <li>The main app landing page is located at ```src/layouts/index.js```.</li>
  <li>All modules used in this test sit within ```src/components```.
  </li>
  <li>Package.json and gatsby-config.js have been configured to deploye to GH pages.</li>

</ul>

-------------------------------------------------


## Method: https://reenaverma.github.io/

### 1) How the App Works:

The app loads by presenting users with venues already requested and loaded for "London".

Within /layouts/index.js, we are making axios get request to the Foursquare API to:
- Get the data near London.
- Drill through the data until we reach venue information.
- Slice to pull through only 12 results.
- And then setting ```Places``` state with this data.


```sh
 // MAKE AXIOS REQUEST/COMPONENT DID MOUNT
componentDidMount() {
  console.log('COMPONENT DID MOUNT');
  axios.get('https://api.foursquare.com/v2/venues/explore?near=london&&client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=201806044&venuePhotos=1')
    .then(res => {
      this.setState(
        { places: res.data.response.groups[0].items.slice(0,12)});
      console.log('VENUE RESULTS:', res.data.response.groups[0].items.slice(0,12));
      this.setState(
        { photos: res.data.response.groups[0].items.slice(0,12)});
    });
 }
 ```

## 2) handleChange:

<p>We then use ```handleChange``` to console.log, what the user is typing in the search box and then set this data to ```searchData``` state.</p>



## 3) handleSubmit

<p>This function then takes ```searchData``` data and reapplies, this to the same axios/api get request.  As a results, the results are updated, depending on which city the user has searched for, every time the submit.</p>

<p align="center"><img src="https://i.imgur.com/K7zQlYC.jpg" width="90%"></p>


## 4) How are we displaying results?:

<p>Within ```src/components/``` you'll find the ```Results.js``` component.</p>

<p>Here we are receiving stored in setState/axios request, (passed through from ```index.js```), and simply mapping through this data and drilling further into the response array.</p>  

```    <section>
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
 ```


## 4) Result Photos:

<p>The Venues Explore API does not provide developers with venue photos.  Hence the temporary placeholder I've included for each venue result.</p>

<p>After researching into this problem, I found a second axios request would need to be made to a second "Photos API":</p>

 https://api.foursquare.com/v2/venues/${photosID}/photos?client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=20130815&ll=40.7,-74```

<p>You will find in ```Results.js``` I have greyed out some javascript.  This is where I have looped through the data, console.logged the ```VenueID``, which is needed for the photos API to call images.  And then console.logged a photo for each looped venue. </p>


```sh
for(var i = 0; i < photos.length; i++) {
  // const photosID = photos[i].venue.id;
  console.log('VENUE ID:', photos[i].venue.id);

// AXIOS REQUEST FOR PHOTOS
axios.get(`https://api.foursquare.com/v2/venues/${photosID}/photos?client_id=JUTTZIYT3Y2ECNHCORRDKIPLW1FNSAH2PW0XRLJCMIPRKY1Q&client_secret=220HPNZNEX3I34URWK4SK33IJBA4UJM3PFSRJIFCYRJTGBBN&v=20130815&ll=40.7,-74`)
     .then(res => {
  console.log('IDS RES:', res.data.response.photos.items[1].prefix + '500x500' + res.data.response.photos.items[1].suffix);

  // HERE WE ARE GRABBING THE IMAGE PREFIX.
  //ADDING THE DIMENSIONS.
  //AND THEN ADDING THE SUFFIX.

  const venueImages = res.data.response.photos.items[1].prefix + '500x500' + res.data.response.photos.items[1].suffix;
  // document.getElementById('venueImages').src = res.data.response.photos.items[1].prefix + '500x500' + res.data.response.photos.items[1].suffix;
// });
}

```

<p>Finding the correct photos API took some time to research.  And as a result, I haven't appended a venue image, to each matching result.  (Ran out of time).</p>

<p>However, what I would do next is apply this function in ```Index.js```, so all axios requests are made in one place and in order.

<p><strong>Other enhancements I would make, is to include a hyperlink to each result, so users can find out more about the venue.</strong></p>

-------------------------------------------------

## Install:

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

Download the entire zip or fork from Github.
```sh
https://reenaverma.github.io/
```

Once installed locally, run the following command to run the test on your local server:8000.
```sh
gatsby develop
```
