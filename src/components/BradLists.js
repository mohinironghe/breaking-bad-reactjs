import Card from "./Card";
import classes from "./BradLists.module.css";
function  BradLists(props){
    return (
        <ul className={classes.gridContainer}>
            { props.data.map((item)=>{
                    item.isFavorite = false;
                   return <Card 
                   key={item.char_id}
                    items={item}/>
                })
            }
        </ul>
      
    )
}
export default BradLists;