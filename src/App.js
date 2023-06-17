import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './homepage/homePage';
import Search from './Search';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<HomePage/>}></Route>
          <Route path='/search' element= {<Search/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
