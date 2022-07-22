import classes from "./Card.module.css";
import { addFavorite, removeFavorite } from "../store/actions";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const list = useSelector((state)=>state.favorites);
  let prop = props.items;
  let isLocalFavorite = list.find((item)=>item.char_id === props.items.char_id);
  function handleClick() {
    if(isLocalFavorite){
        dispatch(removeFavorite(props.items.char_id));
    }else{
        dispatch(addFavorite(props.items));
    }
  }
  function handleImageClick(){
    navigate("/detail",{state:prop});
  }
  return (
    <div className={classes.card}>
      <div onClick={handleImageClick}>
        <img src={prop.img} alt="" width="180px" height="220px" />
      </div>
      <div className={classes.details}>
        <h3>{prop.name}</h3>
        <p className={classes.nickName}>{prop.nickname}</p>
        <p>
          <span className={classes.portrayed}>Portrayed</span>
          {prop.portrayed}
        </p>
      </div>
      <div className={classes.heartImg} onClick={handleClick}>
        {isLocalFavorite ? (
          <img src="../icons/HEART_FILLED.png" width="30px" height="30px" alt="" />
        ) : (
          <img src="../icons/HEART.png" width="30px" height="30px" alt="" />
        )}
      </div>
    </div>
  );
}

export default Card;
