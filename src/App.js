import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration'
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration'
import EventList from './components/EventList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UserLogin />} />
        <Route path='/user-registration' element={<UserRegistration />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-registration' element={<AdminRegistration />} />
        <Route path='/events' element={<EventList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
