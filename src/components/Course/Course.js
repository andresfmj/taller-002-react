import React from 'react';

import './Course.css';

const course = (props) => {
    return (
        <div className='Course' onClick={props.clicked}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default course;