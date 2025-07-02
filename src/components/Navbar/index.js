import React, { Component } from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  BLACK_HTML,
  LOGO,
  MAIN,
  MENU,
  RESET,
  ROOT,
  ROOT_SLASH,
  // SERVICES,
  // SIGN_UP,
  // SIGN_IN,
  // SOCIAL,
  // INICIO,
  // FOOTER,
  // CONTACT,
  // CONTACTO,
  X
} from '../../constants/GeneralConstants';

import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavBtn,
  NavBtnContainer,
  NavBtnLink,
  NavMobileBtnLink,
  NavTxt,
  // NavMenu,
  // NavItem,
  // NavLinks,
  // NavBtnLink
} from './NavbarElements';

import
// capitalizeName,
{
  capitalizeLine,
  // trimLine, asPath
} from '../../utils';

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      is_navbar_transparent: false
    }
  }

  /*
  setNavbarTransparent = () => {
    (window.scrollY >= 80) ?
      this.setState({is_navbar_transparent: false}) :
      this.setState({is_navbar_transparent: true}) 
  }

  //Does not work on class
  useEffect(() => {
    window.addEventListener('scroll', setNavbarTransparent);
  },[])
  */

  render() {

    const OWN_EMAIL = `${process.env.REACT_APP_EMAIL}`;
    //const {is_navbar_transparent} = this.state;
    const { is_open, is_param, resetActiveFilter, toggle } = this.props;

    return (
      <>
        {/* Hamb. menu icon's color */}
        <IconContext.Provider value={{ color: BLACK_HTML }}>
          <Nav is_navbar_transparent={false}>
            {/* Logo Icon */}
            <NavIcon to={MAIN}>
              <img src={require('../../images/white_rabbit_64.svg')}
                alt={LOGO}
              />
            </NavIcon>

            <NavbarContainer>
              <NavLogo to={ROOT_SLASH}><span></span></NavLogo>
              <NavTxt>{OWN_EMAIL}</NavTxt>

              {/*          
                <NavMenu>
                  <NavItem>
                    <NavLinks to={MAIN}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      {capitalizeName(MAIN)}</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to={FOOTER}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                      {capitalizeName(FOOTER)}</NavLinks>
                  </NavItem>
                </NavMenu>
              */}

              {/* Icon to display the NavMenu options */}
              {/*
                !is_param ?
                  <MobileIcon onClick={toggle}>
                    <FaBars />
                  </MobileIcon>
                  :
                  <NavMobileBtnLink to={ROOT} onClick={resetActiveFilter()}>
                    <MobileIcon>
                      <FaArrowLeft />
                    </MobileIcon>
                  </NavMobileBtnLink>
              */}

              {/*
            <NavBtnContainer>
              { 
                !is_param ? 

                <NavBtn onClick={toggle}>
                  {
                    is_open ? 
                    <div>{capitalizeLine(X)}</div> :
                    <div>{capitalizeLine(MENU)}</div>
                  }
                </NavBtn> 
                : 
                <NavBtnLink to={ROOT} onClick={resetActiveFilter()}>
                  {capitalizeLine(RESET)}
                </NavBtnLink>
              }
            </NavBtnContainer>
            */}

            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  }
}

export default Navbar;
