import styled from 'styled-components';
import { Link as LinkRouter} from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import {
    MdOutlineContentCopy,
    MdKeyboardArrowLeft as MdArrowLeft, 
    MdArrowBack
} from 'react-icons/md';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;

    opacity: ${({ is_open }) => (is_open ? '100%' : '0')};
    top: ${({ is_open }) => (is_open ? '0' : '-100%')};

    /* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,90px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`;

/*
export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transaction: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;
*/

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transaction: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const TextEmail = styled.div`
    font-size: 2rem;
    color: #01bf71;
`;

export const Email = styled.div`
    font-size: 1.5rem;
`;

export const ContainerCopy = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

export const BtnCopy = styled.div`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    display: flex; 

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`
export const IconCopy = styled(MdOutlineContentCopy)`
    font-size: 24px;
    margin-right: 6px;
`;

export const ContainerMessageCopy = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    /* max-width: ${({ is_smallest }) => (is_smallest ? '18rem' : 'none')}; */
    max-width: none;
`;

export const IconOk = styled.img`
    max-width: 30px;
    max-height: 30px;
    margin: auto 12px auto 0px; /* top right bottom left */
`;

export const MessageCopy = styled.div`
    font-size: 21px;
    padding: 1.5rem;
    visibility: ${({ is_visible }) => (is_visible ? 'visible' : 'hidden')};
    border: ${({ is_visible }) => (is_visible ? '1px solid #c0c6ce' : 'none')};
    border-radius: 21px;
    display: flex;
    flex-direction: row;
`;

export const BtnBack = styled.div`
    border-radius: 50px;
    background: '#1f1f2e';
    white-space: nowrap;
    padding: 9px 12px 9px 9px; /* t-r-b-l */
    color: '#000';
    font-size: '21px';
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({is_main_bg}) => (is_main_bg ? '#01BF71' : '#fff')};
        color: ${({is_main_bg}) => (is_main_bg ? '#fff' : '#000')};
    }
`;

export const ArrowBack = styled(MdArrowBack)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowLeft = styled(MdArrowLeft)`
    margin-left: 8px;
    font-size: 20px;
`;

export const BtnTextBack = styled.span`
    padding: 3px;
`;