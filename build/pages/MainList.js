"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BradLists_1 = __importDefault(require("../components/BradLists"));
var MainList_module_css_1 = __importDefault(require("./MainList.module.css"));
var MainListService_1 = require("../services/MainListService");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
function MainList() {
    var _a = (0, react_1.useState)(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0, react_1.useState)([]), loadedBads = _b[0], setLoadedBads = _b[1];
    var search = (0, react_redux_1.useSelector)(function (state) { return state.search; });
    (0, react_1.useEffect)(function () {
        (0, MainListService_1.getAllList)(search).then(function (data) {
            setIsLoading(false);
            setLoadedBads(data);
        });
    }, [search]);
    if (isLoading) {
        return (<section>
                <p>Loading...............!</p>
            </section>);
    }
    else {
        return (<div className={MainList_module_css_1.default.container}>
                <BradLists_1.default data={loadedBads}/>
            </div>);
    }
}
exports.default = MainList;
