import React from 'react'
import ListItem from './ListItem'

const List = ({people}) => {
    return(
        <div>
        {people.map((person)=>{
            return(<ListItem id={person.id} thumb={person.image} name={person.name} age={person.age}/>)
        })}
        </div>
    )
    
}

export default List