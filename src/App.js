import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/users/Users';
import AddUser from './pages/adduser/AddUser';
import Navbar from './pages/Navbar/Navbar';
import NavBottom from './pages/navbottom/NavBottom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Users}/>
      <Route exact path="/adduser" component={AddUser}/>
      <NavBottom/>
    </BrowserRouter>
  );
}

export default App;
