"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var ViewDetail_module_css_1 = __importDefault(require("./ViewDetail.module.css"));
function ViewDetails() {
    var location = (0, react_router_dom_1.useLocation)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var userDetail = location.state;
    function handleBack() {
        navigate("/");
    }
    return (<div className={ViewDetail_module_css_1.default.viewContainer}>
            <div className={ViewDetail_module_css_1.default.img}>
                {/* src={userDetail.img} */}
                <img className={ViewDetail_module_css_1.default.background} style={{ "background": "linear-gradient(to bottom, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 1) 100%), url(".concat(userDetail.img, ") no-repeat") }} height="885px" width="740px" alt=''/>
                <img className={ViewDetail_module_css_1.default.backArrow} src='../icons/arrow.png' onClick={handleBack} alt=''/>
                <div className={ViewDetail_module_css_1.default.name}>
                <div className={ViewDetail_module_css_1.default.nameDetail}>
                <img src={userDetail.img} width="230px" height="250px" alt=''/>
                    <h2>{userDetail.name}</h2>
                    <h3>{userDetail.nickname}</h3>
                </div>    
              
                </div>
            </div>
            <div className={ViewDetail_module_css_1.default.details}>
                <div className={ViewDetail_module_css_1.default.potrayed}>
                   <div className={ViewDetail_module_css_1.default.potrayedDetail}>
                     <h3>
                         potrayed
                     </h3>
                     <p>{userDetail.portrayed}</p>
                   </div>
                   <div className={ViewDetail_module_css_1.default.birthday}>
                   <img src='../icons/date.png' alt=''/>
                       {userDetail.birthday}
                   </div>
                </div>
                <div className={ViewDetail_module_css_1.default.occupation}>
                    <h3>Occupation</h3>
                    {userDetail.occupation.map(function (occupation) {
            return <p key={occupation}>{occupation}</p>;
        })}
                </div>
                <div className={ViewDetail_module_css_1.default.appeared}>
                    <h3>Appeared in</h3>
                    <div>
                        <ul>
                            {userDetail.appearance.map(function (appeare) {
            return <li key={appeare}>Season {appeare}</li>;
        })}
                           
                        </ul>
                    </div>
                </div>
                <div className={ViewDetail_module_css_1.default.otherChar}>

                </div>
            </div>
        </div>);
}
exports.default = ViewDetails;
