import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const activeStyle = { fontWeight: 'bold', textDecoration: 'underline' }

export default function Layout() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <header style={{padding: '1rem', borderBottom: '1px solid #ddd'}}>
        <nav style={{display: 'flex', gap: '1rem'}}>
          <NavLink to="/" end style={({isActive}) => isActive ? activeStyle : undefined}>Главная</NavLink>
          <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : undefined}>О нас</NavLink>
          <NavLink to="/posts" style={({isActive}) => isActive ? activeStyle : undefined}>Посты</NavLink>
        </nav>
      </header>

      <main style={{flex: 1, padding: '1rem'}}>
        <Outlet />
      </main>

      <footer style={{padding: '1rem', borderTop: '1px solid #ddd', textAlign: 'center'}}>
        © 2025
      </footer>
    </div>
  )
}