import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Labs from "./components/labs";
import HomeScreen from './components/tuiter/HomeScreen';
import ExploreScreen from './components/tuiter/ExploreScreen';
import Tuiter from "./components/tuiter";
import ProfileScreen from './components/tuiter/ProfileScreen';
import ProfileEditScreen from './components/tuiter/EditProfile';

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route path="/">
                  <Route index element={<Labs/>}/>
                  <Route path="labs" element={<Labs/>}/>
                  <Route path="hello" element={<HelloWorld/>}/>
                  <Route path="tuiter" element={<Tuiter/>}>
                      <Route index element={<HomeScreen/>}/>
                      <Route path="explore" element={<ExploreScreen/>}/>
                      <Route path="profile">
                          <Route index element={<ProfileScreen/>}/>
                          <Route path="edit" element={<ProfileEditScreen/>}/>
                      </Route>
                  </Route>
              </Route>
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
