const ListItem = ({thumb, name, age}) => {
    return(
    <div className='person'>
        <img src={thumb} alt={name}/>
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
        </div>
    </div>
    )
}

export default ListItem