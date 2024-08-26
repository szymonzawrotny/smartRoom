
import Buttons from "../components/Buttons";
import "@/styles/databaseTable.scss";

const DatabaseTable = ()=>{
    return(
        <div className="database">
            <h1>Cała baza</h1>
            <Buttons />
            <div className="dataTable">
                <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ol>
            </div>
        </div>
    )
}
export default DatabaseTable;