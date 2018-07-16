import styled from 'styled-components';
import { tablet } from '../../components/breakpoint';

export const ContactInput = styled.input`
    background-color: black;
    border: 1px solid white;
    height: 40px;
    padding: 8px;
    width: 180px;

    @media (min-width: ${tablet}px) {
        width: 250px;
    }
`;

export const ContactButton = styled.button`
    background-color: white;
    border: none;
    display: inline-block;
    font-weight: bold;
    height: 40px;
    padding: 9px 8px;
    text-align: center;
    width: 90px;
`;

export const ContactSocialMedaContainer = styled.div`
    color: #E0E0E0;

    @media (min-width: ${tablet}px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const ContactLinksCaption = styled.div`
    width: 270px;
    margin-bottom: 0.67rem;
`;

export const ContactLinksIcon = styled.div`
    font-size: 2rem;
`;

export const ContactLinks = styled.div`
    color: #a4a4a4;
    display: flex;
    flex-wrap: wrap;
`;

export const CopyRight = styled.div`
    @media (min-width: ${tablet}px) {
        margin-left: auto;
    }
`;
