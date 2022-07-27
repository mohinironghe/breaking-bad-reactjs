"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var MainNav_module_css_1 = __importDefault(require("./MainNav.module.css"));
var Search_1 = __importDefault(require("../Search"));
function MainNav() {
    var location = (0, react_router_dom_1.useLocation)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    function handleBack() {
        navigate("/");
    }
    function renderHeader() {
        var path = location.pathname;
        if (path == '/') {
            return (<header className={MainNav_module_css_1.default.header}>
              <h3 className={MainNav_module_css_1.default.logo}>
                <img src="../logo.png" alt="" width="30px"/>
                <span>The Breaking Bad</span>
              </h3>
              <div className={MainNav_module_css_1.default.search}>
                <Search_1.default />
              </div>
              <nav>
                <ul>
                  <li>
                    <react_router_dom_1.Link to="/favorites">
                      <img src="../icons/HEART_FILLED.png" alt="" width="30px"/>
                    </react_router_dom_1.Link>
                  </li>
                </ul>
              </nav>
            </header>);
        }
        else if (path == '/favorites') {
            return (<header className={MainNav_module_css_1.default.header}>
            <div>
            <img className={MainNav_module_css_1.default.backArrow} src='../icons/arrow.png' onClick={handleBack} alt=''/>
            </div>  
            <h3 className={MainNav_module_css_1.default.logo}>
              <img src="../logo.png" alt="" width="30px"/>
              <span>The Breaking Bad</span>
            </h3>
            <nav>
              <ul>
                <li>
                  <react_router_dom_1.Link to="/favorites">
                  Favorites
                  </react_router_dom_1.Link>
                </li>
              </ul>
            </nav>
          </header>);
        }
        else {
            return (<header className={MainNav_module_css_1.default.header}>
            </header>);
        }
    }
    return <div>
     {renderHeader()}
    </div>;
}
exports.default = MainNav;
