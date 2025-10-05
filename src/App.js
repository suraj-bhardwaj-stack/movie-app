import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
       <Routes>
        <Route to="/" element={<Home/>}>Home</Route>
      </Routes>
      <Home/>
    </>
   
  );
}

export default App;
