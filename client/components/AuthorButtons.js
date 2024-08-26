
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "@/styles/authorButtons.scss";

const AuthorButtons = ()=>{
    return (
        <div className="buttons">
            <button>
                <a href="https://github.com/szymonzawrotny" target='_blink'>
                    <FaGithub size="26"/>
                </a>
            </button>
            <button>
                <a href="https://www.facebook.com/szymon.zawrotny/" target='_blink'>
                    <FaFacebook size="26"/>
                </a>
            </button>
            <button>
                <a href="https://www.instagram.com/zawruto/" target='_blink'>
                    <AiFillInstagram size="26"/>
                </a>
            </button>
        </div>
    )
}
export default AuthorButtons;