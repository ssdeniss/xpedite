import React from 'react'
import logo from '../../assets/images/logo.png'
import sprite from '../../assets/icons/sprite.svg'
import './header.css'
import '../UI/media.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <a className="header__logo" href=''>
                        <img className="header__logo-img" src={logo} alt="" />
                    </a>
                    <div className="header__menu">
                        <div className='header__burger'></div>
                        <div className='header__burger'></div>
                    </div>
                    <div className="header__mobile-top">
                        <div className="header__mobile-title">Menu</div>
                    </div>
                    <div className="header__list">
                        <ul className="header__items">
                            <li className="header__item"><a className="header__link" href="">HOW IT WORKS</a></li>
                            <li className="header__item"><a className="header__link" href="">ABOUT US</a></li>
                            <li className="header__item"><a className="header__link" href="">JOIN OUR TEAM</a></li>
                            <li className="header__item"><a className="header__link" href="">CONTACT US</a></li>
                            <li className="header__item"><a className="header__link" href="">FAQ</a></li>
                            <li className="header__item"><a className="header__link" href="">BLOG</a></li>
                        </ul>
                    </div>
                    <div className="header__mobile-social">
                        <ul className="header__social-items">
                            <li className="header__social-item"><a className="header__social-link" href="#"><svg className="icon facebook">
                                <use href={sprite + "#facebook-grey"}></use>
                            </svg></a></li>
                            <li className="header__social-item"><a className="header__social-link" href="#"><svg className="icon youtube">
                                <use href={sprite + "#youtube-grey"}></use>
                            </svg></a></li>
                            <li className="header__social-item"><a className="header__social-link" href="#"><svg className="icon instagram">
                                <use href={sprite + "#instagram-grey"}></use>
                            </svg></a></li>
                            <li className="header__social-item"><a className="header__social-link" href="#"><svg className="icon linkedin">
                                <use href={sprite + "#linkedin-grey"}></use>
                            </svg></a></li>
                        </ul>
                    </div >
                    <div className="header__btns">
                        <div className="header__login">Log In</div>
                        <div className="header__registe">Register</div>
                    </div>
                </div>
            </div>
        </header>
    )

}
export default Header