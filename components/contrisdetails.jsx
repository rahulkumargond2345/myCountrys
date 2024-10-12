import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Link, useParams } from 'react-router-dom';

export default function Page(props) {
  const { page: countryName } = useParams();
  const [country, setCountry] = useState({
    borders: [],
  });

  useEffect(() => {
  
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountry({
          img: data.flags.svg,
          name: data.name.common,
          nativeName: data.name.nativeName
            ? Object.values(data.name.nativeName)[0].official
            : "N/A",
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld[0],
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(','),
          language: Object.values(data.languages).join(','),
          borders: [], 
        });

        data.borders.forEach((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderData]) => {
              setCountry((prevState) => ({
                ...prevState,
                borders: [...prevState.borders, borderData.name.common], 
              }));
            });
        });
      })
      .catch((err) => console.log('Error Fetching data', err));
  }, [countryName]);

  function backbtn() {
    history.back();
  }

  return (
    <>
      <button className={styles.backbtn} onClick={backbtn}>Back</button>
      <div className={styles.grid}>
        <div className={styles.img}>
          <img src={country.img} alt={props.imgName + "-flag"} />
        </div>

        <div className={styles.textcontainer}>
          <div className={styles.textrow}>
            <div className={styles.textcol}>
              <h1>{country.name}</h1>
              <h4>Native Name: <span>{country.nativeName}</span></h4>
              <h4>Population: <span>{country.population}</span></h4>
              <h4>Region: <span>{country.region}</span></h4>
              <h4>Sub Region: <span>{country.subregion}</span></h4>
              <h4>Capital: <span>{country.capital}</span></h4>
            </div>

            <div className={styles.text}>
              <h4>Top Level Domains: <span>{country.tld}</span></h4>
              <h4>Currencies: <span>{country.currencies}</span></h4>
              <h4>Languages: <span>{country.language}</span></h4>
            </div>
          </div>

          {country.borders && country.borders.length > 0 ? (
            <div className={styles.borders}>
          <h4>Border Countries:</h4>
              <div className={styles.borderboxes}>
                {country.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <p>No border countries available</p>
          )}
        </div>
      </div>
    </>
  );
}
