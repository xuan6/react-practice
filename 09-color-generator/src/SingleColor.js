import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, type, weight}) => {
    //convert rbg to hex
    let hex = rgbToHex(rgb[0], rgb[1],rgb[2])


    const [alertVisibility, setAlertVisibility]=useState(false)

    //conditional rendering for the copy-to-clipboard message
    const showAlert =()=> {
        console.log(hex)
        setAlertVisibility(true)
        navigator.clipboard.writeText(hex)
    }

    return <div
    className={' color '+`${type==='shade' ? 'color-dark' : ''}`}
    style={{backgroundColor:hex}}
    onClick={showAlert}
    >
        <span className='color-value'>{hex}<br/>{weight}%</span>
        {alertVisibility ? <div className='click-to-copy'>copied to clipboard</div>: ''}
    </div>
}

export default SingleColor