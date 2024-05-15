import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'

function MainLayout() {
  return (
    <div>
        <MainNav/>
        <Outlet/>
    </div>
  )
}

export default MainLayout
