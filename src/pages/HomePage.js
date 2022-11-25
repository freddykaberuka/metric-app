import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetCountryList } from '../redux/countries/Country';
import euro from '../assets/european.png';
import direction from '../assets/direction.svg';
import NavBar from '../component/NavBar';

const HomePage = () => {
  const dispatch = useDispatch();
  const Countries = useSelector((state) => state.GetCountryReducer);
  useEffect(() => {
    dispatch(GetCountryList());
  }, []);
  return (
    <div>
      <NavBar />
      <div className="continent-map">
        <img src={euro} alt="" />
        <h1>EUROPE</h1>
      </div>
      <hr />
      <div className="stats"><h3>STATS BY COUNTRY</h3></div>
      <hr />
      <div className="country-container">
        {Countries.map((country) => (
          <div key={country.id} className="country-wrap">
            <Link to="detail" state={{ state: country }}>
              <img src={country.flags.png} alt="map" />
              <div className="country-text">
                <div className="country-name">{country.name.common}</div>
                <div>{country.population}</div>
                {console.log(country)}
              </div>
              <div className="direction"><img src={direction} alt="" /></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
