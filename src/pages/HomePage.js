/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetCountryList } from '../redux/countries/Country';

const HomePage = () => {
  const dispatch = useDispatch();
  const Countries = useSelector((state) => state.GetCountryReducer);
  useEffect(() => {
    dispatch(GetCountryList());
  }, []);
  return (
    <div>
      <h1>home</h1>
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
