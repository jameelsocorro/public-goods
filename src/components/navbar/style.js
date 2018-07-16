import styled from 'styled-components';

import { desktop } from '../breakpoint';

export const NavDesktop = styled.div`
    display: none;

    @media (min-width: ${desktop}px) {
        display: flex;
    }
`;

export const NavMobile = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media (min-width: ${desktop}px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: #a4a4a4;
    display: inline-block;
    font-size: 1rem;
    visibility: hidden;
    width: 120px;

    @media (min-width: ${desktop}px) {
        visibility: visible;
    }
`;

export const NavTitle = styled.div`
    font-size: 2.1rem;
`;
