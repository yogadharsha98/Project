import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomeScreen } from './screens/home/HomeScreen';
import HotelScreen from './screens/hotel/HotelScreen';
import ListScreen from './screens/list/ListScreen';
import LoginScreen from './screens/login/LoginScreen';
import FlightScreen from './screens/flight/FlightScreen';
import FlightListScreen from './screens/flightList/FlightListScreen';
import Register from './screens/register/register';
import Forum from './screens/forum/ForumScreen'
import RetreatListScreen from './screens/retreatList/RetreatListScreen';
import ThankScreen from './screens/thankyou/thankYou';
import RetreatScreen from './screens/retreat/RetreatScreen';
import EventScreen from './screens/eventList/EventScreen';
import EventBookingScreen from './screens/eventbooking/EventBookingScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/hotels' element={<ListScreen />} />
        <Route path='/hotels/:id' element={<HotelScreen />} />
        <Route path='/flights' element={<FlightListScreen />} />
        <Route path='/flights/:id' element={<FlightScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/retreat' element={<RetreatListScreen />} />
        <Route path='/retreat/:id' element={<RetreatScreen />} />
        <Route path='/event' element={<EventScreen />} />
        <Route path='/event/:id' element={<EventBookingScreen />} />
        <Route path='/thankyou' element={<ThankScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
