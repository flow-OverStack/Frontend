import './Header.css'
import React, { useState } from 'react';
import Burger from '../../assets/burger-menu.svg'
import { Link, useLocation } from 'react-router-dom';

type Page = "question" | "hero" | "topics"


const Header = () => {
  const [nav, setNav] = useState<'header__nav' | 'header__nav header__nav--active'>('header__nav');
  const [burger, setBurger] = useState<'header__burger' | 'header__burger header__burger--active'>('header__burger');

  const { pathname } = useLocation()

  function openAndCloseNav() {
    if (nav === 'header__nav') {
      setNav('header__nav header__nav--active')
      setBurger('header__burger header__burger--active')
    } else {
      setNav('header__nav')
      setBurger('header__burger')
    }
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">fastQ</Link>
      <nav className={nav}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to={"/"} className={`${pathname == '/' ? ' header__nav-link is-active' : 'header__nav-link'}`}>Главная</Link>
          </li>
          <li className="header__nav-item">
            <Link to={"/topics"} className={`${pathname == '/topics' ? ' header__nav-link is-active' : 'header__nav-link'}`}>Темы</Link>
          </li>
          <li className="header__nav-item">
            <Link to={"/question"} className={`${pathname == '/question' ? ' header__nav-link is-active' : 'header__nav-link'}`}>Задать вопрос</Link>
          </li>
        </ul>
      </nav>
      <div className="header__buttons">
        <Link to={"/authorization"} className="header__buttons-up">Вход</Link>
        <Link to={"/registration"} className="header__buttons-in">Регистрация</Link>
      </div>
      <button className={burger} onClick={openAndCloseNav} aria-label='Открыть бургерное меню' title='Открыть меню'>
        <Burger className="header__burger-icon" />
      </button>
    </header>
  );
};

export default Header;
