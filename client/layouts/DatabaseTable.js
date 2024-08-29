import Buttons from "../components/Buttons";
import "@/styles/databaseTable.scss";

const DatabaseTable = (props)=>{

    const elements = props.content.map(one=>{
        return <li key={one.id}>{`${one.value}, ${one.date.slice(0,10)}, ${one.time}`}</li>
    })

    return(
        <div className="database">
            <h1>Cała baza</h1>
            <Buttons handleButton={props.handleButton}/>
            <div className="dataTable">
                <ol>
                    {elements}
                </ol>
            </div>
        </div>
    )
}
export default DatabaseTable;