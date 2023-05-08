import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import WorksPage from './components/WorksPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Showcase from './components/Showcase';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = '/' element = {<Main/>}/>
          <Route path = 'works' element = {<WorksPage/>}/>
          <Route path = 'about' element = {<About/>}/>
          <Route path = 'contacts' element = {<Contacts/>}/>
          <Route path = 'showcase' element = {<Showcase/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
