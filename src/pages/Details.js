import React from 'react';
import { useLocation } from 'react-router-dom';
import BackNav from '../component/backNav';

function Details() {
  const location = useLocation();
  const { state } = location.state;

  return (
    <div>
      <BackNav />
      <div className="continent-map">
        <img src={state.flags.png} alt="" />
        <h1>{state.name.common}</h1>
      </div>
      <hr />
      <div className="stats"><h3>STATS BY COUNTRY</h3></div>
      <hr />
      <div className="detail-container">
        <div className="detail-wrap">
          <div className="detail-name"><h3>Capital City</h3></div>
          <div className="detail-desc">
            <h5>
              {state.capital}
            </h5>
          </div>
        </div>
        <hr />

        <div className="detail-wrap">
          <div className="detail-name"><h3>Population</h3></div>
          <div className="detail-desc">
            <h5>
              {state.population}
              {' '}
              Polulation
            </h5>
          </div>
        </div>
        <hr />

        <div className="detail-wrap">
          <div className="detail-name"><h3>Surface Area</h3></div>
          <div className="detail-desc">
            <h5>
              {state.area}
              {' '}
              Km2
            </h5>
          </div>
        </div>
        <hr />

        <div className="detail-wrap">
          <div className="detail-name"><h3>Sub Region</h3></div>
          <div className="detail-desc">
            <h5>
              {state.subregion}
            </h5>
          </div>
        </div>
        <hr />

      </div>
    </div>
  );
}

export default Details;
