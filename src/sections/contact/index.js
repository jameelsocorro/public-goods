import React, { Component } from 'react';
import PinterestIcon from 'react-icons/lib/fa/pinterest';
import FacebookIcon from 'react-icons/lib/fa/facebook-official';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import InstagramIcon from 'react-icons/lib/fa/instagram';

import { PageContainer, Page } from '../../components';

import {
    ContactInput,
    ContactButton,
    ContactSocialMedaContainer,
    ContactLinksIcon,
    ContactLinksCaption,
    ContactLinks,
    CopyRight } from './style';

class Contact extends Component {
	render() {
		return (
            <PageContainer backgroundColor='black'>
                <Page center
                    resolution='1200'
                    height='100'>
                    <div className='white-text pr-24 pl-24 pt-40 pb-24'>
                        <div>Connect with us</div>
                        <div className='mt-16'>
                            <ContactInput placeholder='Enter your email'></ContactInput><ContactButton>Subscribe</ContactButton>
                        </div>
                        <ContactSocialMedaContainer className='pt-16 pb-32'>
                            <ContactLinksCaption className='section__caption'>By  clicking    Sign  Up  you  agree  to  receive  marketing  emails  from  PUBLIC  GOODS </ContactLinksCaption>
                            <ContactLinksIcon>
                                <PinterestIcon className='m-4'/>
                                <FacebookIcon className='m-4'/>
                                <TwitterIcon className='m-4'/>
                                <InstagramIcon className='m-4'/>
                            </ContactLinksIcon>
                        </ContactSocialMedaContainer>
                        <ContactLinks className='pt-8'>
                            <div className='m-8'>Contact</div>
                            <div className='m-8'>Shipping</div>
                            <div className='m-8'>Privacy Policy</div>
                            <div className='m-8'>Terms and Service</div>
                            <CopyRight className='m-8'>©  2017  PUBLIC  GOODS  –  All  Rights  Reserved</CopyRight>
                        </ContactLinks>
                    </div>
                </Page>
            </PageContainer>
		);
	}
}

export default Contact;
