import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, type, weight}) => {
    let hex = rgbToHex(rgb[0], rgb[1],rgb[2])
    console.log(hex)
    return <div
    className={' color '+`${type==='shade' ? 'color-dark' : ''}`}
    style={{backgroundColor:hex}}>
    <div>
        <span className='color-value'>{hex}<br/>
       {weight}%</span>
    </div>
    </div>
}

export default SingleColor