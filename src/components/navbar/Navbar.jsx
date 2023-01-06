import React, { useState } from 'react';
import {
  FaBars,
  FaFacebook,
  FaTimes,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import './NavbarStyles.css';
import { Link } from 'react-scroll';
import allieLogo from '../../assets/allieLogoBoxW.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(true);

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className='navbar'>
      <div className='container'>
        {/* <div className={slide ? 'logo slide-right' : 'logo'}> */}
        <div className={'logo'}>
          <h3>Allie Dahl</h3>
          <img src={allieLogo} alt='Allie Dahl' className='allie-logo' />
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href='/'>
              <Link
                onClick={handleClose}
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </a>
          </li>
          <li>
            <a href='/'>
              <Link
                onClick={handleClose}
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </a>
          </li>
          <li>
            <a href='/'>
              <Link
                onClick={handleClose}
                activeClass='active'
                to='highlights'
                spy={true}
                smooth={true}
                duration={500}
              >
                Highlights
              </Link>
            </a>
          </li>
          <li>
            <a href='/'>
              <Link
                onClick={handleClose}
                activeClass='active'
                to='project1'
                spy={true}
                smooth={true}
                duration={500}
              >
                Project1
              </Link>
            </a>
          </li>
          <li>
            <a href='/'>
              <Link
                onClick={handleClose}
                activeClass='active'
                to='project2'
                spy={true}
                smooth={true}
                duration={500}
              >
                Project2
              </Link>
            </a>
          </li>
          <li>
            <a href='/'>
              <Link
                onClick={handleClose}
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </a>
          </li>

          <div className='mobile-menu'>
            <button>A Dahl House Design</button>
            {/* <button>Account</button> */}
            <div className='social-icons'>
              <a
                href='https://www.instagram.com/adahlhousedesign/'
                target='_blank'
                rel='noreferrer'
              >
                <span>
                  <FaInstagram className='icon' />
                </span>
              </a>
              <a
                href='https://www.linkedin.com/in/alliedahl/'
                target='_blank'
                rel='noreferrer'
              >
                <span>
                  <FaLinkedinIn className='icon' />
                </span>
              </a>
              <a
                href='https://vsco.co/alliedahl-/'
                target='_blank'
                rel='noreferrer'
              >
                <span>
                  <GiCarWheel className='icon' />
                </span>
              </a>
              <a
                href='https://www.facebook.com/allie.dahl.756'
                target='_blank'
                rel='noreferrer'
              >
                <span>
                  <FaFacebook className='icon' />
                </span>
              </a>
            </div>
          </div>
        </ul>

        <ul className='nav-menu hide'>
          <li>
            <a href='/'>A Dahl House Design</a>
          </li>
        </ul>

        <div className='hamburger' onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars style={{ color: '#ffffff' }} size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
