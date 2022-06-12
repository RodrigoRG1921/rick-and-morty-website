import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css'

import SplashScreen from './screens/splashscreen'
import HomeScreen from './screens/home'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <SplashScreen /> } />
      <Route path='home' element={ <HomeScreen /> } />
    </Routes>
  </BrowserRouter>
)

export default App;
