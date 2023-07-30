import React from 'react';
import {Route,Routes} from "react-router-dom"
import PrivateRoute from '../Components/PrivateRoute';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Chat from '../Components/Chat';
import IndividualChat from '../Components/IndividualChat';

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/chat' element={<PrivateRoute><Chat /></PrivateRoute>} />
            <Route path='/individual' element={<PrivateRoute><IndividualChat /></PrivateRoute>} />
        </Routes>
      
    </div>
  )
}
