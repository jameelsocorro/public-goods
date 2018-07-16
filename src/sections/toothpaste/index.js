import React, { Component } from 'react';

import toothPasteImg from '../../assets/img/toothpaste.jpg';

import { Page, Hero, Button } from '../../components';

class ToothPaste extends Component {
	render() {
        const height = `${window.innerHeight}px`;
		return (
            <Hero background={`url(${toothPasteImg}) center center no-repeat`}
                height={height}>
                <Page center
                        resolution='1200'
                        height='100'>
                    <div className='hero__content pr-24 pl-24 pt-80 pb-80'>
                        <div>
                            <div className='section__title mb-56'>we’ve  done  the  math</div>
                            <div className='hero__title mb-40'>Become  a  member  and  save  up  to  $70every  month.</div>
                            <div className='section__description'>Whether  you  buy  your  products  at  the  local  health  food  store  or  a  big  box  chain—our  membership  offers  you  major  savings.</div>
                        </div>
                        <Button className='button bg-white mt-120'>Join Today</Button>
                    </div>
                </Page>
            </Hero>
		);
	}
}

export default ToothPaste;
