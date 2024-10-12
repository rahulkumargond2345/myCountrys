import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
function Searchbar(props) {
    return <>
     <div className={styles.searchContainer}>
        <div className={styles.search}>
        <i className={`fa-solid fa-magnifying-glass ${styles.fasolid}`}></i>
              <input onChange={(e)=>props.setQuery(e.target.value.toLocaleLowerCase())} type="text" placeholder="Search any Countrys Name"/>
            </div>
            <select className={styles.filter} onChange={((e)=>{
              props.setQuery(e.target.value)
            })}>
                <option hidden value="Filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
    </div>
    </>
  }  
    

export {Searchbar}