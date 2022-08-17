import Card from "./Card";
import classes from "./BradLists.module.css";
import { User } from "../interfaces/User";

const BradLists:React.FC<{data:User[]}> = ({data})=>{
    return(
        <ul className={classes.gridContainer}>
                  { data.map((item:User)=>{
                           return <Card 
                           key={item.char_id}
                            items={item}/>
                        })
                    }
                </ul>
    )
}
export default BradLists;