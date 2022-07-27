"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var MainList_1 = __importDefault(require("./pages/MainList"));
var Favorites_1 = __importDefault(require("./pages/Favorites"));
var ViewDetails_1 = __importDefault(require("./pages/ViewDetails"));
var Layout_1 = __importDefault(require("./components/Layout/Layout"));
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (
    // <div className="App">
    //   <header>
    //     <h1>header</h1>
    //   </header>
    //  <section className="container">
    //     <MainList />
    //  </section>
    // </div>
    <Layout_1.default>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path='/' exact element={<MainList_1.default />}/>
        <react_router_dom_1.Route path='/favorites' element={<Favorites_1.default />}/>
        <react_router_dom_1.Route path='/detail' element={<ViewDetails_1.default />}/>
      </react_router_dom_1.Routes>
    </Layout_1.default>);
}
exports.default = App;
