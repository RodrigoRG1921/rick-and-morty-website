import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css'

import SplashScreen from './screens/splashscreen'
import HomeScreen from './screens/home'
import Characters from './screens/characters'
import Character from './screens/character'
import Locations from './screens/locations'
import Location from './screens/location'
import Episodes from "./screens/episodes";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <SplashScreen /> } />
      <Route path='home' element={ <HomeScreen /> } />
      <Route path='characters' element={ <Characters /> } />
      <Route path='characters/:id' element={ <Character /> } />
      <Route path='locations' element={ <Locations /> } />
      <Route path='locations/:id' element={ <Location /> } />
      <Route path='episodes/' element={ <Episodes /> } />
    </Routes>
  </BrowserRouter>
)

export default App;
