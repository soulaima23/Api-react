import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './component/Detail';


function App() {
  return (
    <div className="App">
          
      <BrowserRouter>
         <Routes> 
           <Route path='/' element={<UserList/> }/>   
           <Route path='/Detail/:id' element={<Detail/> }/>   

               
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
