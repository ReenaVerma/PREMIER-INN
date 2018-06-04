import React from 'react';
// import Link from 'gatsby-link';

const Header = ({handleChange, handleSubmit}) => (

  <section className='hero homepage hero-head is-mobile'>
    <div className='hero-body'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='is-half has-text-centered homepagebox'>
            <h1 className='title has-text-white'>Search for the best venues in your area</h1>
            <h1 className='title has-text-white'>Summer starts here</h1>

            <form className="level-item" onSubmit={handleSubmit}>
              <div className="inputstyle field has-addons">
                <div className="control">
                  <input className="input is-large"
                    type="text"
                    placeholder="London, NYC..."
                    onChange={handleChange}
                    // value={newTodo}
                  />
                </div>
                <div className="control">
                  <button className="button is-danger is-large">GO!</button>
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
