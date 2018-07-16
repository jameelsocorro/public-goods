import styled from 'styled-components';

import { Hero } from '../../components';
import { desktop } from '../../components/breakpoint';

export const IntroHero = styled(Hero)`
    background-size: cover;

    @media (min-width: ${desktop}px) {
        background-size: 135%;
    }
`;
