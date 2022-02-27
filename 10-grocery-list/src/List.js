import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item}) => {
  return <div className='grocery-item'>
  <p className='title'>{item}</p>
  <div className='btn-group'>
    <button className='edit-btn'><FaEdit/></button>
    <button className='delete-btn'><FaTrash/></button>
  </div>
  </div>
}

export default List