import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item, index, Edit}) => {
  return <div className='grocery-item'>
  <p className='title'>{item}</p>
  <div className='btn-group'>
    <button className='edit-btn' onClick={()=>Edit(item, index)}><FaEdit/></button>
    <button className='delete-btn'><FaTrash/></button>
  </div>
  </div>
}

export default List