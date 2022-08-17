import { useDispatch } from "react-redux";
import { updateSearch } from "../store/actions";
import classes from "./Search.module.css";
import { useState } from "react";

function Search() {
  const dispatch = useDispatch();
  let [search, setSearch] = useState(false);

  function handleSearch() {
    if (search) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  }

  const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value)
    dispatch(updateSearch(e.currentTarget.value));
  }
  return (
      
    <div className={classes.searchContainer}>
      {search ? (
        <div className={classes.search}>
         
          <input
            type="text"
            className={classes.inputBoard}
            name="search"
            placeholder="search"
            onChange={onInputChange}
          />
           <img
            src="../icons/search.svg"
            alt=""
            onClick={handleSearch}
          />
        </div>
      ) : (
        <img
          src="../icons/search.svg"
          alt=""
          className={classes.firstSearch}
          onClick={handleSearch}
        />
      )}
    </div>
  );
}
export default Search;
