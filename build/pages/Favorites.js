"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var BradLists_1 = __importDefault(require("../components/BradLists"));
var react_router_dom_1 = require("react-router-dom");
function Favorites(props) {
    var list = (0, react_redux_1.useSelector)(function (state) { return state.favorites; });
    var navigate = (0, react_router_dom_1.useNavigate)();
    // const [favorites,setFavorites] = useState([]);
    // let array = [];
    function handleBack() {
        navigate("/");
    }
    return (<div>
      {/* <img className={classes.backArrow} src="../icons/arrow.png" onClick={handleBack} alt="" /> */}
      <BradLists_1.default data={list}/>
    </div>);
}
var mapStateToProps = function (state) {
    return { favorites: state.favorite };
};
exports.default = (0, react_redux_1.connect)(mapStateToProps)(Favorites);
