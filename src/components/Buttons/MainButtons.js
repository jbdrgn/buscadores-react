import styled from "styled-components";
import { Link } from "react-router-dom";

export const RightArrowButton = styled(Link)`
    border-radius: 50px;
    background: #01BF71;
    white-space: nowrap;
    padding: ${({is_big}) => (is_big ? '14px 48px' : '12px 30px')};
    /* color: ${({is_dark}) => (is_dark ? '#010606' : '#fff')}; */
    color: #010606;
    font-size: '16px';
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
        font-size: ${(is_font_big) => (is_font_big ? '20px' : '16px')};
    }
`;

/*  
*   Dark Color Link: 
*   https://www.w3schools.com/colors/colors_picker.asp?colorhex=ff0000 
*/
export const DarkButton = styled(Link)`
    border-radius: 50px;
    background: ${({is_dark_btn}) => (is_dark_btn ? '#1f1f2e' : '#01bf71')};
    white-space: nowrap;
    padding: 12px 24px 12px 24px;
    color: ${({is_dark_txt}) => (is_dark_txt ? '#000' : '#fff')};
    font-size: '16px';
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
        background: ${({is_main_bg}) => (is_main_bg ? '#000' : '#fff')};
        border: ${({is_main_bg}) => (is_main_bg ? 'none' : '1px solid #1f1f2e')};
        color: ${({is_main_bg}) => (is_main_bg ? '#fff' : '#1f1f2e')};
        font-size: ${(is_font_big) => (is_font_big ? '20px' : '16px')};
    }
`;

export const SmallArrowButton = styled(Link)`
    border-radius: 50px;
    background: ${({is_dark_btn}) => (is_dark_btn ? '#1f1f2e' : '#01BF71')};
    white-space: nowrap;
    padding: ${({is_big}) => (is_big ? '14px 48px' : '12px 30px')};
    color: ${({is_dark}) => (is_dark ? '#000' : '#fff')};
    font-size: '16px';
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
        font-size: ${(is_font_big) => (is_font_big ? '20px' : '16px')};
    }
`;