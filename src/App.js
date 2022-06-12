import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css'

import SplashScreen from './screens/splashscreen'
import HomeScreen from './screens/home'
import Characters from './screens/characters'
import Locations from './screens/locations'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <SplashScreen /> } />
      <Route path='home' element={ <HomeScreen /> } />
      <Route path='characters' element={ <Characters /> } />
      <Route path='locations' element={ <Locations /> } />
    </Routes>
  </BrowserRouter>
)

export default App;
