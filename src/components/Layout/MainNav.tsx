import { Link, useLocation ,useNavigate} from "react-router-dom";
import classes from "./MainNav.module.css";
import Search from "../Search";

function MainNav() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleBack(){
    navigate("/",);
}
  function renderHeader(){
    let path = location.pathname;
    if(path == '/'){
        return (
          
            <header className={classes.header}>
              <h3 className={classes.logo}>
                <img src="../logo.png" alt="" width="30px" />
                <span>The Breaking Bad</span>
              </h3>
              <div className={classes.search}>
                <Search />
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/favorites">
                      <img src="../icons/HEART_FILLED.png" alt="" width="30px" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          );
    }else if(path == '/favorites'){
        return (
            <header className={classes.header}>
            <div>
            <img className={classes.backArrow} src='../icons/arrow.png' onClick={handleBack}  alt=''/>
            </div>  
            <h3 className={classes.logo}>
              <img src="../logo.png" alt="" width="30px" />
              <span>The Breaking Bad</span>
            </h3>
            <nav>
              <ul>
                <li>
                  <Link to="/favorites">
                  Favorites
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        ) ;
    }else{
        return (
            <header className={classes.header}>
            </header>
        );
        
            
      }
    
  }
return <div>
     {renderHeader()}
</div>
  
}
export default MainNav;
