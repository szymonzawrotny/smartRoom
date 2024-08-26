import "@/styles/infoTable.scss"

const InfoTable = (props)=>{

    const elements = props.database.map(one=>{
        return <li key={one.id}>{`${one.value}, ${one.date.slice(0,10)}, ${one.time}`}</li>
    })

    return(
        <div className="infoTable">
            <h1>{props.header1}</h1>
            <p>{props.value}</p>
            <h2>Ostatnie odczyty:</h2>
            <div className="dataTable">
                <ol>
                    {elements}
                </ol>
            </div>
        </div>
    )
}
export default InfoTable;