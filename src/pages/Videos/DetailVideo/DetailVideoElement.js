import styled from 'styled-components';
import { Link as LinkRouter} from 'react-router-dom';
import {
    MdKeyboardArrowLeft as MdArrowLeft, 
    MdArrowBack
} from 'react-icons/md';

export const MainContainer = styled.div`
    margin-top: 60px;
    text-align: center;
    min-height: calc(33vh);

    @media screen and (max-width: 768px){
        margin-top: 90px;
    }    

    @media screen and (min-width: 768px){
        margin-left:auto;
        margin-right:auto;
        max-width:750px;
    }      
`;

/* export const UlContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
 */
export const IdContainer = styled.div`
    flex: 3 90rem;
    max-width: 650px;
`;

export const DetailVideoRoute = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transaction: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
    }
`;

export const KeyContainer = styled.li`
    list-style-type: none;
    padding: 30px;
`;

export const Title = styled.div`
    font-size: 24px;
    color: black;
    //padding-bottom: 1rem;
    //min-height: 72px; //avoid the non-equal level of lines
`;

export const ImageContainer = styled.div`
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
        background: #000;        
        color: #fff;        
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

export const DetailVideoFooter = styled.div`
    bottom:0;
    position:fixed;
    width:100%;

    @media screen and (min-width: 768px){
        display:none;
    }   
`;