import {useLocation,useNavigate} from 'react-router-dom';
import classes from './ViewDetail.module.css'
function ViewDetails(){
    const location = useLocation();
    const navigate = useNavigate();
    let userDetail = location.state;
    console.log(userDetail);

    function handleBack(){
        navigate("/",);
    }
    return(
        <div className={classes.viewContainer}>
            <div className={classes.img}>
                <img src={userDetail.img} height="850px" width="600px" alt='' />
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