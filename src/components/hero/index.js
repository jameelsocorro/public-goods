import React from 'react';

import { HeroContainer, HeroBackground } from './style';

const Hero = (props) => {
    const { children } = props;
    return (
        <HeroContainer>
            <HeroBackground {...props}>{children}</HeroBackground>
        </HeroContainer>
    )
};

export { Hero };
