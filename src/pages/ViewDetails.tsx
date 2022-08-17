
import {useLocation,useNavigate} from 'react-router-dom';
import classes from './ViewDetail.module.css';
import {User} from '../interfaces/User';


function ViewDetails(){
    const location = useLocation();

    const navigate = useNavigate();
    const userDetail = location.state as User;

    function handleBack(){
        navigate("/",);
    }
    return(
        <div className={classes.viewContainer}>
            <div className={classes.img}>
                {/* src={userDetail.img} */}
                <img  className={classes.background} style={{"background": `linear-gradient(to bottom, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 1) 100%), url(${userDetail.img}) no-repeat`}} height="885px" width="740px" alt='' />
                <img className={classes.backArrow} src='../icons/arrow.png' onClick={handleBack}  alt=''/>
                <div className={classes.name}>
                <div className={classes.nameDetail}>
                <img src={userDetail.img} width="230px" height="250px" alt=''/>
                    <h2>{userDetail.name}</h2>
                    <h3>{userDetail.nickname}</h3>
                </div>    
              
                </div>
            </div>
            <div className={classes.details}>
                <div className={classes.potrayed}>
                   <div className={classes.potrayedDetail}>
                     <h3>
                         potrayed
                     </h3>
                     <p>{userDetail.portrayed}</p>
                   </div>
                   <div className={classes.birthday}>
                   <img  src='../icons/date.png'   alt=''/>
                       {userDetail.birthday}
                   </div>
                </div>
                <div className={classes.occupation}>
                    <h3>Occupation</h3>
                    {userDetail.occupation.map((occupation)=>{
                       return <p key={occupation}>{occupation}</p>
                    })}
                </div>
                <div className={classes.appeared}>
                    <h3>Appeared in</h3>
                    <div>
                        <ul>
                            {userDetail.appearance.map((appeare)=>{
                              return <li key={appeare} >Season {appeare}</li>
                            })}
                           
                        </ul>
                    </div>
                </div>
                <div className={classes.otherChar}>

                </div>
            </div>
        </div>
    )
}
export default ViewDetails;