import styled from 'styled-components';
import { Link as LinkRouter} from 'react-router-dom';
import {
    MdKeyboardArrowLeft as MdArrowLeft, 
    MdArrowBack
} from 'react-icons/md';

export const Main = styled.div`
    /* id={MAIN} */
`

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

export const IdContainer = styled.div`
    flex: 3 90rem;
    max-width: 650px;
`;

export const LinkTo = styled.a`
    text-decoration: none;
    list-style: none;
    color: #000;
    cursor: pointer;
`;

export const DetailVideoRoute = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transaction: 0.2s ease-in-out;
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

export const YourNameFooter = styled.div`
    bottom:0;
    position:fixed;
    width:100%;

    @media screen and (min-width: 768px){
        display:none;
    }   
`;



//FORM

export const FormContainer = styled.div`
    margin-top: 3.0rem;
    min-height: 692px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;

    @media screen and (max-width: 480px){
        margin-top: 1.2rem;
        padding-left: 9px;        
        padding-right: 9px;        
    }    
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   
`;

export const Icon = styled(LinkRouter)`
    text-decoration: none;
    text-align: center;
    padding-bottom: 6px;
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Form = styled.form`
    background: #010101;
    max-width: 510px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 24px 15px 18px 15px; /* t-r-b-l */
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormHeaderOne = styled.h1`
    margin-bottom: 2.1rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;    
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
`;

export const FormButton = styled.button`
    margin-top: 0.9rem;
    background: #01bf71;
    padding: 0.9rem 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const AnswerForm = styled.form`
    max-width: 510px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    margin-top: 1.2rem;
    padding: 0.9rem; /* t-r-b-l */
    border: ${({ is_visible }) => (is_visible ? '1px solid #8A2BE2' : 'none')};
    border-radius: 9px;
`;

export const AlertForm = styled.form`
    max-width: 510px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    font-size: 1.5rem;
    text-align: center;
    color: #DC3545;
    margin: 0 auto;
    margin-top: -1.8rem;
    margin-bottom: 1.2rem;
    padding: 0.9rem; /* t-r-b-l */
    border: ${({ is_visible }) => (is_visible ? '1px solid #DC3545' : 'none')};
    border-radius: 9px;
`;

export const AlertSpan = styled.span`
    visibility: ${({ is_visible }) => (is_visible ? 'visible' : 'hidden')};
`;

export const Text = styled.span`
    text-align: left;
    color: #000;
    font-size: 1.2rem;
`;

export const Span = styled.span`
`;



//RE-ROUTE

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    //margin-top: ${({ is_answer }) => (is_answer ? '-30px' : '30px')};

    //@media screen and (min-width: 768px){
    //    margin-top: 0rem;
    //}      
`;

export const ReRoute = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    color: #000;
    cursor: pointer;
`;

export const BtnBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
    white-space: nowrap;
    padding: 9px 12px 9px 9px; /* t-r-b-l */
    outline: none;
    border: none;

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