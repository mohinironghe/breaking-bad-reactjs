"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(require("./Card"));
var BradLists_module_css_1 = __importDefault(require("./BradLists.module.css"));
function BradLists(props) {
    return (<ul className={BradLists_module_css_1.default.gridContainer}>
            {props.data.map(function (item) {
            item.isFavorite = false;
            return <Card_1.default key={item.char_id} items={item}/>;
        })}
        </ul>);
}
exports.default = BradLists;
