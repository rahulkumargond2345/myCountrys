import { Outlet } from "react-router-dom";
import { Header } from "./header";
import styles from './style.module.css';
import {createContext, useState} from 'react'

const userContext = createContext()

function RenderComponents() {
  const [them, setThem] = useState('light')

    return (
      <>
      <userContext.Provider value={{them, setThem}}>
        <Header title={'Where in the world?'} />
        <Outlet/>
        
        </userContext.Provider>
      </>
    );
}

export { RenderComponents, userContext };