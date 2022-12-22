import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

import Home from './components/home';
import Bpm from './components/bpm';

function App() {
  return (
    // <Routes>
    //   <Route path='/' component={<Home />}></Route>
    //   <Route path='/bpm' component={<Bpm />}></Route>
    // </Routes>
    <Home />
  );
}

export default App;
