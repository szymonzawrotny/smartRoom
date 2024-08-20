import "@/layouts/header.scss";
import InfoTable from "./InfoTable";
import Buttons from "./Buttons";

const Header = ()=>{
    return(
        <div className="info">
            <InfoTable header1="Czy zamknąłeś drzwi?" value="tak" database=""/>
            <InfoTable header1="Czy coś jest w pokoju?" value="tak" database=""/>
            <InfoTable header1="Jaka temperatura pokoju??" value="27 stopni" database=""/>
            <InfoTable header1="Jaka wilgotność pokoju?" value="41%" database=""/>
            <InfoTable header1="Dzieje się coś głośnego?" value="nie" database=""/>
            <InfoTable header1="Czy gleba kaktuska wilgotna?" value="tak" database=""/>
            <div className="database">
                <h1>Cała baza</h1>
                <Buttons />
                <div className="dataTable">
                    asd
                </div>
            </div>
            <div className="infoTable" style={{padding:"56px"}}>
                <h1>Author:</h1>
                <p style={{fontSize:"48px"}}>Szymon Zawrotny</p>
            </div>
        </div>
    )
}
export default Header;