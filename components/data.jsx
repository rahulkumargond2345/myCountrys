import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import ConstryListsimmer from './countrylistssimmer'
import styles from './style.module.css';

function Myfunc({ query }) {
    const [contriseData, setContriseData] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                setContriseData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className={styles.container}>
             {contriseData.length === 0 ? <ConstryListsimmer /> : null}
            {contriseData
                .filter((country) =>
                    country.name?.common?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || country.region.toLocaleLowerCase().includes(query.toLocaleLowerCase())
                )
                .map((e, index) => {
                    return (
                        <NavLink to={`/${e.name.common}`} className={styles.cardContainer} key={index}>
                            <div className={styles.myimg}>
                                <img src={e.flags.svg} alt={`${e.name.common} flag`} />
                            </div>
                            <h2 className={styles.heading}>{e.name.common}</h2>
                            <div className={styles.cardText}>
                                <h4 className={styles.h4}>Population: <span className={styles.span}>{e.population}</span></h4>
                                <h4 className={styles.h4}>Region: <span className={styles.span}>{e.region}</span></h4>
                                <h4 className={styles.h4}>Capital: <span className={styles.span}>{e.capital}</span></h4>
                            </div>
                        </NavLink>
                    );
                })}
        </div>
    );
}

export { Myfunc };
