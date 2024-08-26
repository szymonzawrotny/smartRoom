
import AuthorButtons from '../components/AuthorButtons';

const AuthorPanel = ()=>{
    return(
        <div className="infoTable" style={{padding:"120px"}}>
            <h1>Author:</h1>
            <p style={{fontSize:"48px"}}>Szymon Zawrotny</p>
            <AuthorButtons />
        </div>
    )
}
export default AuthorPanel;