import './App.css';
import MainList  from './pages/MainList';
import Favorites from './pages/Favorites';
import ViewDetails from './pages/ViewDetails';
import Layout from './components/Layout/Layout';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    // <div className="App">
    //   <header>
    //     <h1>header</h1>
    //   </header>
    //  <section className="container">
    //     <MainList />
    //  </section>
    // </div>
    <Layout>
      <Routes>
        <Route path='/' element={<MainList />}/>
        <Route path='/favorites' element={<Favorites /> } />
        <Route path='/detail' element={<ViewDetails /> } />
      </Routes>
    </Layout>
  );
}

export default App;
