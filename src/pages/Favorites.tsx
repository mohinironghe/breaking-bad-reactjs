import { connect, useSelector } from "react-redux";
import BradLists from "../components/BradLists";
import { useNavigate } from "react-router-dom";
import { InitialState } from "../interfaces/InitialState";
function Favorites() {
  const list = useSelector((state:InitialState) => state.favorites);
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
const mapStateToProps = (state:InitialState) => {
  return { favorites: state.favorites };
};
export default connect(mapStateToProps)(Favorites);
