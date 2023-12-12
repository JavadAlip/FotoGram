import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "973735556425-cdaf3sfi07al7t9ld3ijdgs2st95eu1i.apps.googleusercontent.com"
const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};
export default App;