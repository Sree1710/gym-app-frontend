import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddClient from './Components/AddClient';
import ViewClient from './Components/ViewClient';
import SearchClient from './Components/SearchClient';
import DeleteClient from './Components/DeleteClient';
import Login from './Components/Login';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/addg" exact element={<AddClient/>} />
      <Route path="/viewg" exact element={<ViewClient/>} />
      <Route path="/searchg" exact element={<SearchClient/>}/>
      <Route path="/deleteg" exact element={<DeleteClient/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
