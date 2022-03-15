const Reorder =({reorder,style, disabled})=>{
    return(
        <button onClick={reorder} className={style} disabled={!disabled}>reorder</button>
    )
}

export default Reorder