import styled from 'styled-components';
import { Link as LinkRouter} from 'react-router-dom';

export const ChannelRoute = styled(LinkRouter)`
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transaction: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
    }
`;

export const KeyContainer = styled.li`
    list-style-type: none;
    padding: 30px;
`

export const MainContainer = styled.div`
`

export const ImageContainer = styled.div`
`

export const Title = styled.div`
    font-size: 24px;
    color: black;
    padding-bottom: 1rem;
`

export const Image = styled.img`
    height: auto;
    width: 100%;
    max-width: 449px;
    padding: 1rem;

    &:hover{
        border: 1px solid #c0c6ce;
        border-radius: 24px;
        opacity: 0.5;
        -webkit-filter: grayscale(100%); /*  */
        filter: grayscale(100%); 
        cursor: pointer;
    }
`

export const SocialContainer = styled.div`
    padding: 24px;
    height: auto;
    width: 100%;

    &:hover{
        border: 1px solid #c0c6ce;
        border-radius: 24px;
    }

    /*
    position: absolute;
    left: 50%;   
    margin-top: -50%;
    transform: translate(-50%,-50%); 
    */

    /* visibility: ${({isHover}) => (isHover ? 'visible' : 'hidden')}; */
`

export const Social = styled.a`
    padding: 9px;
    display: flex; 
    justify-content: space-between;
    text-decoration: none;

    &:hover{
        opacity: 0.3;
        border: 1px solid #c0c6ce;
        border-radius: 12px;
    }
`

export const ColumnContainer = styled.div`
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
`

export const Icon = styled.img`
    max-width: 64px;
    max-height: 64px;
`

export const Text = styled.span`
    font-size: 18px;
`