import React from 'react';

import {Link} from 'react-router-dom';

import Button from '../button/button.component'

import './header.styles.scss'

const Header = () => (
  <header className="header">
    <Link to="/" className="left"><h1 className="title">DiverTeach</h1></Link>
    <nav className="options">
      <Link to="/opos">Prepara't!</Link>
      <Link to="/dashboard">Tauler</Link>
      <Button color="green">Entra amb Google</Button>
    </nav>
  </header>
)

export default Header;