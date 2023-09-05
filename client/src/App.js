import './App.scss';
import 'swiper/css';
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import FavoriteView from './components/favorite/FavoriteView';
import UserDetail from './components/Details/Details';
import Edit from './components/edit/Edit';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/:category' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
      <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/favorites' element={<FavoriteView />} />
      <Route element={<UserDetail/>} path="/user/:id" />
      <Route element={<Edit/>} path="/user/:id/edit"/>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
