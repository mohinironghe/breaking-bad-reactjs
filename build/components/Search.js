"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var actions_1 = require("../store/actions");
var Search_module_css_1 = __importDefault(require("./Search.module.css"));
var react_1 = require("react");
function Search() {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(false), search = _a[0], setSearch = _a[1];
    function handleSearch() {
        if (search) {
            setSearch(false);
        }
        else {
            setSearch(true);
        }
    }
    function onInputChange(event) {
        dispatch((0, actions_1.updateSearch)(event.target.value));
    }
    return (<div className={Search_module_css_1.default.searchContainer}>
      {search ? (<div className={Search_module_css_1.default.search}>
         
          <input type="text" className={Search_module_css_1.default.inputBoard} name="search" placeholder="search" onChange={onInputChange}/>
           <img src="../icons/search.svg" alt="" onClick={handleSearch}/>
        </div>) : (<img src="../icons/search.svg" alt="" className={Search_module_css_1.default.firstSearch} onClick={handleSearch}/>)}
    </div>);
}
exports.default = Search;
