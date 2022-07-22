import { useDispatch } from "react-redux";
import { updateSearch } from '../store/actions';
import classes from './Search.module.css'
function Search(){
    const dispatch = useDispatch();
    function onInputChange(event) {
        console.log(event.target.value);
        dispatch(updateSearch(event.target.value))
    }
    return(
        <div>
            <input type="text" className={classes.search}  name="search" placeholder="search" onChange={onInputChange} />
        </div>
    )
}
export default Search;