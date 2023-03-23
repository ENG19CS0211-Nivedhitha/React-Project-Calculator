import React from 'react';
import OutputRow from './OutputRow'
import './output.css'

const Output = (props) => {
    return (
        <div className='result'>
            <OutputRow value={props.answer} textSize={{fontSize: '15px', paddingTop: '20px'}}/>
            <OutputRow value={props.user} textSize={{fontSize: '30px'}}/>
        </div>
    )
}

export default Output;

