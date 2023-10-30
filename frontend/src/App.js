//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './component/Nav';
import Footer from './component/Footer';
import SignUp from './component/signup';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/login';
import ADD_PRODUCTS from './component/add_products';
import Product_list from './component/product_list';
import Updateproduct from './component/updateproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav/>
      <Routes>
        
      <Route element={<PrivateComponent/>}>
      <Route path="/" element={<Product_list/>}/>
      <Route path="/add" element={<ADD_PRODUCTS/>}/>
      <Route path="/update/:id" element={<Updateproduct/>}/>
      <Route path="/logout" element={<h1>Logout !</h1>}/>
      <Route path="/profile" element={<h1>your Profile</h1>}/>
      
      </Route>
      <Route path='/signup' element={<SignUp/>}  />
      <Route path='/login' element={<Login/>}/>
      </Routes>
    
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
