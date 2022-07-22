import MainNav from "./MainNav";
import '../../App.css'
function Layout (props){
    return(
        <div className="App">
            <MainNav />
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Layout;