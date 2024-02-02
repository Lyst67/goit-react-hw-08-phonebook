import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Header.module.css';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={`${css.header_container} ${css.container}`}>
        <Link to={'/'}>
          <img className={css.logo} src={logo} alt="car logo" />
        </Link>
        <p className={css.header_text}>Car Rent Group</p>
        <Navigation />
      </div>
    </header>
  );
};
