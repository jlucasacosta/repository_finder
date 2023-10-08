import React from 'react'
import { Link } from 'react-router-dom'
import style from './nav.module.css'

const Navigation = () => {
  return (
    <nav className={style.nav}>
        <Link to={"/"}>Home</Link>
        <Link to={"/starred"}>Starred</Link>
    </nav>
  )
}

export default Navigation