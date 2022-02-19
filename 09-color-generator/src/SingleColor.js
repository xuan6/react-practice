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
    //anytime alearVisibility changes, the timeout will be triggered to clear the alert 
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlertVisibility(false)
        },2000)
        //clear the timeout session, otherwise the next time we click the tile, the alert message won't show up
        return ()=>clearTimeout(timeout)
    },[alertVisibility])

    return <div
    className={`${type==='shade' ? 'color color-dark' : 'color'}`}
    style={{backgroundColor:hex}}
    onClick={showAlert}
    >
        <span className='color-value'>{hex}<br/>{weight}%</span>
        {alertVisibility ? <div className='click-to-copy'>copied to clipboard</div>: ''}
    </div>
}

export default SingleColor