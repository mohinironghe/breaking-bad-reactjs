import MainNav from "./MainNav";
import '../../App.css';
interface LayoutProps {
    children: React.ReactNode;
  }
// function Layout (props:){
//     return(
//         <div className="App">
//             <MainNav />
//             <main>
//                 {props.children}
//             </main>
//         </div>
//     )
// }
const Layout:React.FC<LayoutProps> = ({children}) => {
    return(
                <div className="App">
                    <MainNav />
                    <main>
                        {children}
                    </main>
                </div>
            )
}
export default Layout;