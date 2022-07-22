import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';
import Search from '../Search';
function MainNav(){
   
    
    return(
        
        <header className={classes.header}>
         <h3 className={classes.logo}><img src='../logo.png' alt="" width= "30px"/><span>The Breaking Bad</span></h3>
         <div className={classes.search}><Search /></div>    
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
    
}
export default MainNav;