import styled from 'styled-components';

export const MainContainer = styled.div`
    margin-top: 90px;
    text-align: center;
    min-height: calc(67vh);

    @media screen and (max-width: 768px){
        margin-top: 150px;
    }    
`;

export const UlContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const IdContainer = styled.div`
    flex: 3 30rem;
    max-width: 650px;
`;