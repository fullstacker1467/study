import React from 'react'
import { Outlet } from 'react-router-dom'

export const ArticlesLayout = () => {
  return (
    <div>
        <h2>My Articles</h2>
        <hr />
        <Outlet />
    </div>
  )
}
