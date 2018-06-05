import React from 'react';
// import Link from 'gatsby-link';

const Header = ({handleChange, handleSubmit}) => (

  <section className='hero homepage hero-head is-mobile'>
    <div className='hero-body'>
      <div className='container hero-margin'>
        <div className='columns is-centered'>
          <div className='is-half has-text-centered homepagebox'>
            <h1 className='title has-text-white'>City Hotspots with Premier Inn</h1>
            <h2 className='title has-text-white'>Summer starts here</h2>

            <form className="level-item" onSubmit={handleSubmit}>
              <div className="inputstyle field has-addons">
                <div className="control ">
                  <input className="input is-large"
                    type="text"
                    placeholder="London, NYC..."
                    onChange={handleChange}
                    // value={newTodo}
                  />
                </div>
                <div className="control">
                  <button className="button is-warning is-large">search now</button>
                </div>
              </div>

            </form>
          </div>


        </div>
      </div>
    </div>
  </section>
);

export default Header;
