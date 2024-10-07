import { Route, Routes, useNavigate } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AbuseReportForm from './pages/AbuseReportForm';
import MyReports from './pages/MyReports';
import Report from './pages/Report';
import AuthorityAllReports from './pages/AuthorityAllReports';
import AuthorityViewReport from './pages/AuthorityViewReport';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Layout = ({ children, user , setUser, refreshToken, setRefreshToken}) => {
  return (
    <>
      <Header user={user} setUser={setUser} refreshToken = {refreshToken} setRefreshToken={setRefreshToken}  />
      <div className='app__main'>
        {children}
      </div>
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('refreshToken');
    setRefreshToken(token);
    
    // Navigate only if token is present and different from previous token
    if (refreshToken) {
      navigate("/");
    }
  }, [navigate, refreshToken]); // Added `navigate` and `refreshToken` as dependencies

  return (
    <Routes>
      <Route exact path="/" element={<Layout> <Home /></Layout>} />
      <Route exact path="/login" element={<Login user={user} setUser={setUser} refreshToken = {refreshToken} setRefreshToken={setRefreshToken}/>} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/abuse-report-form" element={<Layout><AbuseReportForm /></Layout>} />
      <Route exact path="/my-reports" element={<Layout><MyReports /></Layout>} />
      <Route exact path="/report/:id" element={<Layout><Report /></Layout>} />
      <Route exact path='/authority-all-reports' element={<Layout><AuthorityAllReports /></Layout>} />
      <Route exact path='/authority-view-report/:id' element={<Layout><AuthorityViewReport /></Layout>} />
    </Routes>
  );
}

export default App;
