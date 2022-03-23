import './App.css';
import Login from './components/Login';
import Home from './page/Home';
 import { BrowserRouter as Router,
//    Route, 
//    Routes
Redirect,
Switch,
Route, } from "react-router-dom";
import About from './components/About/inde';
import Shop from './page/Shop';
import Cart from './page/Cart';
import Contact from './components/Contact';
import Register from './components/Register';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/about' component={About} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/register' component={Register} />
      <Redirect to='/' />
    </Switch>
  </Router>







    // <Router  >
    //   <Routes>
    //     <Route path='/' element={<Home/>}/ >
    //     <Route path='/login' element={<Login/>}/ >
    //     <Route path='/about' element={<About/>}/ >
    //     <Route path='/shop' element={<Shop/>}/ >
    //     
    //     <Route path='/contact' element={<Contact/>}/ >
    //     <Route path='/cart' element={<Cart/>}/ >
    //     <Route path='/register' element={<Register/>}/ >
       
        
    //    </Routes>
    // </Router>
    
  );
}   

export default App;
