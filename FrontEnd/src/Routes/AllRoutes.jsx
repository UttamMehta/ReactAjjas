import React from 'react';
import {Route,Routes} from "react-router-dom"

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/chat' element="" />
            <Route path='/individual' element="" />
        </Routes>
      
    </div>
  )
}
