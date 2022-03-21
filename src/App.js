import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Labs from "./components/labs";
//import HomeScreen from './components/tuiter/HomeScreen';
//import ExploreScreen from './components/tuiter/ExploreScreen';

import './App.css';

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route path="/hello" exact={true} element={<HelloWorld/>}/>
              <Route path="/" exact={true} element={<Labs/>}/>

          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
