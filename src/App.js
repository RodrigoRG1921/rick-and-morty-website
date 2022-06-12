import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SplashScreen from './screens/splashscreen'
import HomeScreen from './screens/home'
import Characters from './screens/characters'
import Character from './screens/character'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <SplashScreen /> } />
      <Route path='home' element={ <HomeScreen /> } />
      <Route path='characters' element={ <Characters /> } />
      <Route path='characters/:id' element={ <Character /> } />
    </Routes>
  </BrowserRouter>
)

export default App;
