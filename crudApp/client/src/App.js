import './App.css';
import AddPersonel from './Components/AddPersonel'
import ListPersonel from './Components/ListPersonel';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditPersonel from './Components/EditPersonel';
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/list" element={<ListPersonel />}></Route>
          <Route exact path="/add" element={<AddPersonel />}  ></Route>
          <Route exact path="/edit/:id" element={<EditPersonel />}  ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
