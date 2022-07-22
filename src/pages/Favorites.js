import {connect,useSelector} from 'react-redux';
import BradLists from '../components/BradLists';
function Favorites(props){
  const list = useSelector((state)=>state.favorites);
  console.log('fav list ',list)
  // const [favorites,setFavorites] = useState([]);
  // let array = [];
    return(
        <div>
          <BradLists data={list} />
        </div>
    )
}
const mapStateToProps = state => {
  return {favorites:state.favorite}
}
export default connect(mapStateToProps)(Favorites);