"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_module_css_1 = __importDefault(require("./Card.module.css"));
var actions_1 = require("../store/actions");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
function Card(props) {
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var list = (0, react_redux_1.useSelector)(function (state) { return state.favorites; });
    var prop = props.items;
    var isLocalFavorite = list.find(function (item) { return item.char_id === props.items.char_id; });
    function handleClick() {
        if (isLocalFavorite) {
            dispatch((0, actions_1.removeFavorite)(props.items.char_id));
        }
        else {
            dispatch((0, actions_1.addFavorite)(props.items));
        }
    }
    function handleImageClick() {
        navigate("/detail", { state: prop });
    }
    return (<div className={Card_module_css_1.default.card}>
      <div onClick={handleImageClick}>
        <img src={prop.img} alt="" width="180px" height="220px"/>
      </div>
      <div className={Card_module_css_1.default.details}>
        <h3>{prop.name}</h3>
        <p className={Card_module_css_1.default.nickName}>{prop.nickname}</p>
        <p>
          <span className={Card_module_css_1.default.portrayed}>Portrayed</span>
          {prop.portrayed}
        </p>
      </div>
      <div className={Card_module_css_1.default.heartImg} onClick={handleClick}>
        {isLocalFavorite ? (<img src="../icons/HEART_FILLED.png" width="30px" height="30px" alt=""/>) : (<img src="../icons/HEART.png" width="30px" height="30px" alt=""/>)}
      </div>
    </div>);
}
exports.default = Card;
