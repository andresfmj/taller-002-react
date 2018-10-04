import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const navigation = (props) => {
    return (
        <div className='Navigation'>
            <header>
                <nav>
                    <ul>
                        {props.navs.map(item => 
                            (
                                <li key={item.id}>
                                    <NavLink to={item.url}>{item.label}</NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default navigation;