import './App.css';
import SignupIndex from './Pages/signup/SignupIndex';
import LoginIndex from './Pages/login/LoginIndex';
import { Routes, Route, } from "react-router-dom";
import HomePage from './Pages/homepage/HomePage';
import DashboardIndex from './Pages/dashboard/DashboardIndex';
import ProfileIndex from './Pages/Profile/ProfileIndex';
import AuthRoute from './Components/GlobalComponents/AuthRoute';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact/>
      <Route path='/signup' element={<SignupIndex />} />
      <Route path='/login' element={<LoginIndex />} />
      <Route path='/dashboard' element={ <AuthRoute><DashboardIndex /></AuthRoute>} />
      <Route path='/profile' element={<AuthRoute><ProfileIndex/></AuthRoute> } />
    </Routes>
  );
}

export default App;


