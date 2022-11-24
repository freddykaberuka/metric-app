/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetCountryList } from '../redux/countries/Country';
import euro from '../assets/european.png';

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
      {Countries.map((country) => (
        <>
          <p key={country.id}>
            {country.name.common}
          </p>
          <p>{console.log(country.name.common, 'else')}</p>

        </>
      ))}
    </div>
  );
};

export default HomePage;
