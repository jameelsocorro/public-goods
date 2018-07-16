import React, { Component } from 'react';

import { Page } from '../../components';

import data from './data';

class Shop extends Component {
	render() {
		return (
            <Page center
                    resolution='1200'
                    height='100'>
                <div className='text-center p-24 mt-56 mb-56'>
                    <div className='section__title mb-48 '>SHOP  THE  COLLECTION</div>
                    <div>
                        <div className='flex flex--column flex--tablet-row section__description'>
                            {
                                data.map((item, key) => {
                                    return (
                                        <div key={key} className='m-16'>
                                            <img src={item.img} alt="" width='100%' />
                                            <div>{item.desc}</div>
                                            <div className='text-upper text-bold mt-8'>{item.buttonTitle}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Page>
		);
	}
}

export default Shop;
