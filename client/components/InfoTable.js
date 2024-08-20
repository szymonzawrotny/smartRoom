const InfoTable = (props)=>{
    return(
        <div className="infoTable">
            <h1>{props.header1}</h1>
            <p>{props.value}</p>
            <h2>Ostatnie odczyty:</h2>
            <div className="dataTable">{props.database}</div>
        </div>
    )
}
export default InfoTable;