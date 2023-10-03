import './App.css';
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,
    Link,
    Navigate
} from 'react-router-dom';  

import Login from './pages/Login';
import Register from './pages/Register';
import MyWallet from './pages/MyWallet';
import Bonus from './pages/Bonus';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/wallet' element = {<MyWallet />} />
          <Route path='/bonus' element = {<Bonus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
