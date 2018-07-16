import React, { Component } from 'react';

import { PageContainer, Page } from '../../components';

import data from './data';

class Reviews extends Component {
	render() {
		return (
            <PageContainer backgroundColor='#AEBDC7'>
                <Page center
                    resolution='1200'
                    height='100'>
                    <div className='text-center p-24 pt-56 pb-56'>
                        <div className='section__title mb-48 white-text text-upper'>the  reviews  are  in</div>
                        <div>
                            <div className='flex flex--column flex--tablet-row section__description'>
                                {
                                    data.map((item, key) => {
                                        return (
                                            <div key={key} className='flex-item--equal p-32'>
                                                <img src={item.img} alt="" width='180px' />
                                                <div className='white-text mt-16 section__caption'>“{item.caption}“</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Page>
            </PageContainer>
		);
	}
}

export default Reviews;
