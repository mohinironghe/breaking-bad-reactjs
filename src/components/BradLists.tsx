import Card from "./Card";
import classes from "./BradLists.module.css";
import { User } from "../interfaces/User";
function  BradLists(props:any){
    return (
        <ul className={classes.gridContainer}>
            { props.data.map((item:User)=>{
                   return <Card 
                   key={item.char_id}
                    items={item}/>
                })
            }
        </ul>
      
    )
}
export default BradLists;