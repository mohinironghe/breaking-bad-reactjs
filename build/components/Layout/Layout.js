"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MainNav_1 = __importDefault(require("./MainNav"));
require("../../App.css");
function Layout(props) {
    return (<div className="App">
            <MainNav_1.default />
            <main>
                {props.children}
            </main>
        </div>);
}
exports.default = Layout;
