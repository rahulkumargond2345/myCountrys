import { Outlet } from "react-router-dom";
import { Searchbar } from "./card"; 
import { useState } from "react";
import styles from './style.module.css';
import { Myfunc } from "./data";
import { RenderComponents } from "./renderComponets";
    export default function Home() {
    const [query, setQuery] = useState('');
    return(<>
       <Searchbar setQuery={setQuery} />
       <Myfunc query={query} />
    </>)
}