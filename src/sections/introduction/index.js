import React, { Component } from 'react';

import heroImg from '../../assets/img/hero.jpg';

import { Button, Page } from '../../components';

import { IntroHero } from './style';

class Introduction extends Component {
	render() {
        const height = `${window.innerHeight}px`;
		return (
            <IntroHero background={`url(${heroImg}) 20% 70% no-repeat`}
                height={height}>
                <Page center
                    resolution='1200'
                    height='100'>
                        <div className='hero__content pr-24 pl-24 pt-80 pb-80'>
                            <div>
                                <div className='hero__title mb-40'>We  make  healthy  products,  minus  the unhealthy  profits.</div>
                                <div className='section__description'>Care  about  your  health  and  the  planet,  but  don’t  want  to  pay  the  inflated  price?  You’ve  come  to  the  right  place.</div>
                            </div>
                            <Button className='bg-white mt-120'>Join Today</Button>
                        </div>
                </Page>
            </IntroHero>
		);
	}
}

export default Introduction;
