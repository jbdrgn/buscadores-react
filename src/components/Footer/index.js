import React, { Component } from 'react';
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { ABOUT_US, ALL_RIGHTS_RESERVED, CONTACT_US, CURRENT_YEAR, FACEBOOK, INSTAGRAM, YOUTUBE } from '../../constants/GeneralConstants';
// import capitalizeName,{ capitalizeLine, trimLine } from '../../utils';
import {
  FOOTER, MAIN,
  // SERVICES, SIGN_UP, SOCIAL 
} from '../../constants/GeneralConstants';
import {
  FooterContainer,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  // SocialLogo,
  // WebsiteRights,
  // SocialIcons,
  // SocialIconLink,
  FooterIcon,
  LinkScrollLogo,
  FooterLastUpdate
} from './FooterSectionElements';
import git_commit from '../../data/lastcommit.json';

export class Footer extends Component {

  render() {

    // const VERSION = `${process.env.REACT_APP_VERSION}`;

    return (
      <FooterContainer id={FOOTER}>
        <SocialMedia>
          <SocialMediaWrap>
            <LinkScrollLogo to={MAIN}>
              <FooterIcon
                src={require('../../images/ether64.png')}
                alt='white_rabbit_ears.png'
              />
            </LinkScrollLogo>
            {/* <WebsiteRights>&#169; {CURRENT_YEAR} &nbsp; {capitalizeName(ALL_RIGHTS_RESERVED)}</WebsiteRights> */}
            {/* <WebsiteRights>{VERSION}</WebsiteRights> */}
          </SocialMediaWrap>
        </SocialMedia>
        <FooterLastUpdate>
          {/* <div>Última actualización:</div> */}
          <div>Last update:</div>
          {git_commit.commits[0].update}
        </FooterLastUpdate>
      </FooterContainer>
    )
  }
}

export default Footer;