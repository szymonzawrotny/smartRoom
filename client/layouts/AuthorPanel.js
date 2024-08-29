
import AuthorButtons from '../components/AuthorButtons';

const AuthorPanel = ()=>{
    return(
        <div className="infoTable authorDiv">
            <h1>Author:</h1>
            <p className='authorP'>Szymon Zawrotny</p>
            <AuthorButtons />
        </div>
    )
}
export default AuthorPanel;
