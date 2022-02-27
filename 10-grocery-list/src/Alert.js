import React, { useEffect, useState } from 'react'

const Alert = ({state, dismiss}) => {
    // dimiss alert after 1.5s
    useEffect(()=>{
        const timeout = setTimeout(() => {
            dismiss();
        }, 1500);
        return ()=>{
            clearTimeout(timeout);
        }
    },[state]) // render alert by monitoring alert state change

    const showAlert =(state)=>{
        if(state==='add'){
            return <div className='alert alert-success'>Item Added To The List</div>
        }
        if(state==='edit'){
            return <div className='alert alert-success'>Item Changed</div>
        }
        if(state==='delete'){
            return <div className='alert alert-danger'>Item Removed</div>
        }
        if(state==='clear'){
            return <div className='alert alert-danger'>Empty List</div>
        }
    }

    return <div>
    {state ? showAlert(state) : ''}
    </div>

}
  
    


export default Alert