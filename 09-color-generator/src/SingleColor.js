import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, type, weight}) => {
    let hex = rgbToHex(rgb[0], rgb[1],rgb[2])
    console.log(hex)
    return <div
    className='color'
    style={{backgroundColor:hex}}>
    <p>{hex}</p>
    <p>{weight}%</p>
    </div>
}

export default SingleColor