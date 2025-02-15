import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll';


export const FooterContainer = styled.footer`
    background-color: #101522;
`
export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(LinkRouter)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    /* max-width: 1000px; */
    width: 100%;
    padding-bottom: 9px;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px auto 0 auto;
    padding: 15px 15px 0px 15px; /* top right bottom left */
`

export const FooterIcon = styled.img`
    max-height: 75px;
    max-width: 75px;
`

export const LinkScrollLogo = styled(LinkScroll)`
    cursor: pointer;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

export const FooterLastUpdate = styled.div`
    font-size: 12px;
    /* text-align: right; */
    text-align: left;
    color: #fff;
    padding-right: 1rem;

    @media screen and (min-width: 768px){
        padding-bottom: 1rem;
    }
`
