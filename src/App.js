
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Admin/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/view/:id' element={<View/>}></Route>
      <Route path={'*'} element={<PageNotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
