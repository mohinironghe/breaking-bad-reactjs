import BradLists from "../components/BradLists";
import classes from './MainList.module.css';
import {getAllList} from '../services/MainListService';
import { useState,useEffect } from "react";
import {useSelector} from 'react-redux';
import {InitialState} from '../interfaces/InitialState'

function MainList(){
    const [isLoading,setIsLoading] = useState(true);
    const [loadedBads,setLoadedBads] = useState([]);
    const search = useSelector((state:InitialState)=> state.search);
    useEffect(()=>{
       getAllList(search).then((data)=>{
           setIsLoading(false);
           setLoadedBads(data);
       });
        
    },[search])
    if(isLoading){
        return (
            <section>
                <p>Loading...............!</p>
            </section>
        )
    }else{
        return (
            <div className={classes.container}>
                <BradLists data={loadedBads} />
            </div>
        )
    }
    
}
export default MainList;