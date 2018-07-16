import React, { Component, Fragment } from 'react';
import BarIcon from 'react-icons/lib/fa/bars';

import { NavMobile, NavDesktop, NavLink, NavTitle } from './style';

class Navbar extends Component {

    render() {
        return (
            <Fragment>
                <NavMobile className="text-upper pl-32 pr-32 pt-24 pb-24">
                    <NavTitle>
                        <div>Public</div>
                        <div>Goods</div>
                    </NavTitle>
                    <BarIcon size={30}/>
                </NavMobile>
                <NavDesktop className="flex flex--center-around text-upper pl-32 pr-32 pt-24 pb-24">
                    <div>
                        <NavLink>products</NavLink>
                        <NavLink>membership</NavLink>
                        <NavLink>our mission</NavLink>
                    </div>
                    <NavTitle>
                        <div>Public</div>
                        <div>Goods</div>
                    </NavTitle>
                    <div>
                        <NavLink>sign up</NavLink>
                        <NavLink>login</NavLink>
                        <NavLink>cart <span className='ml-8 black-text'>0</span></NavLink>
                    </div>
                </NavDesktop>
            </Fragment>

        );
    }

}

export { Navbar };
