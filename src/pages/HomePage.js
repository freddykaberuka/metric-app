/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetCountryList } from '../redux/countries/Country';
import euro from '../assets/european.png';
import direction from '../assets/direction.svg';

const HomePage = () => {
  const dispatch = useDispatch();
  const Countries = useSelector((state) => state.GetCountryReducer);
  useEffect(() => {
    dispatch(GetCountryList());
  }, []);
  return (
    <div>
      <div className="continent-map">
        <img src={euro} alt="" />
        <h1>EUROPE</h1>
      </div>
      <div className="country-container">
        {Countries.map((country) => (
          <div key={country.id} className="country-wrap">
            <img src={country.flags.png} alt="map" />
            <div className="country-text">
              <div>{country.name.common}</div>
              <div>{country.population}</div>
              {console.log(country)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
