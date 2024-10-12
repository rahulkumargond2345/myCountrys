import styles from './style.module.css';
import { NavLink} from 'react-router-dom';
import { useEffect, useState, useContext} from "react";
import { userContext} from './renderComponets';

function Header(props) {
   const {them, setThem} = useContext(userContext)
   function DarkMode() {
      const body = document.querySelector('body');
      if (them === 'light') {
         body.classList.add('dark');
         setThem('dark');          
      } else {
         body.classList.remove('dark');
         setThem('light');             
      }
   }
   return (
      <>
         <header>
            <div className={styles.headerContainer}>
               <NavLink to={'/'} className={styles.title}>
                  <h1>{props.title}</h1>
               </NavLink>
               <button onClick={DarkMode} className={styles.mode}>
                  <span className={styles.icon}>
                  <i className={them === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i>
                     &nbsp; {them === 'light' ? 'Dark' : 'Light '}
                  </span>
               </button>
            </div>
         </header>
      </>
   );
}

export { Header };
