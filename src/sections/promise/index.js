import React, { Component } from 'react';
import { Page, Button } from '../../components'

import starImage from '../../assets/img/star.jpg';
import pigImage from '../../assets/img/pig.jpg';
import calendarImage from '../../assets/img/calendar.jpg';

class Promise extends Component {
	render() {
		return (
            <Page center
                    resolution='1200'
                    height='100'>
                    <div className='text-center p-24 mt-56 mb-56'>
                        <div className='section__title mb-48 '>THE  PUBLIC  GOODS  PROMISE</div>
                        <div>
                            <div className='flex flex--column flex--tablet-row section__description'>
                                <div className='text-center m-16 mb-48 flex-item--equal'>
                                    <img className="mb-16" src={starImage} width="60px" alt=""/>
                                    <div><b>Premium  Products  At  Cost</b></div>
                                    <div>We  create  healthy  premium  products—starting  with  bathroom  essentials—and  then  sell  them  to  members  with  zero  markup.</div>
                                </div>
                                <div className='text-center m-16 mb-48 flex-item--equal'>
                                    <img className="mb-16" src={pigImage} width="60px" alt=""/>
                                    <div><b>Astounding  Savings </b></div>
                                    <div>We’ve  done  the  math,  and  you’ll  save  as  much  as  $70  a  month—just  with  our  personal  care  products.</div>
                                </div>
                                <div className='text-center m-16 mb-48 flex-item--equal'>
                                    <img className="mb-16" src={calendarImage} width="60px" alt=""/>
                                    <div><b>Launching  New  Products  Every  Month</b></div>
                                    <div>We’re  already  developing  toxin-freehousehold  cleaners,  baby  products  andorganic  cotton  linens.  The  more  we  add,the  more  you  save.</div>
                                </div>
                            </div>
                        </div>
                        <Button className='bg-green white-text mt-32'>Join Today</Button>
                    </div>
            </Page>
		);
	}
}

export default Promise;
