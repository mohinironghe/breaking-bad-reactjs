import { connect, useSelector } from "react-redux";
import BradLists from "../components/BradLists";
import { useNavigate } from "react-router-dom";
import classes from "./Favorites.module.css";
function Favorites(props) {
  const list = useSelector((state) => state.favorites);
  const navigate = useNavigate();
  // const [favorites,setFavorites] = useState([]);
  // let array = [];
  function handleBack() {
    navigate("/");
  }
  return (
    <div>
      {/* <img className={classes.backArrow} src="../icons/arrow.png" onClick={handleBack} alt="" /> */}
      <BradLists data={list} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { favorites: state.favorite };
};
export default connect(mapStateToProps)(Favorites);
