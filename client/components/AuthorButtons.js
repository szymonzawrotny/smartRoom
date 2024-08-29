
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "@/styles/authorButtons.scss";

const AuthorButtons = ()=>{
    return (
        <div className="buttons">
            <a href="https://github.com/szymonzawrotny" target='_blink'>
                <button>
                    <FaGithub size="26"/>
                </button>
            </a>
            <a href="https://www.facebook.com/szymon.zawrotny/" target='_blink'>
                <button>
                    <FaFacebook size="26"/>
                </button>
            </a>
            <a href="https://www.instagram.com/zawruto/" target='_blink'>
                <button>
                    <AiFillInstagram size="26"/>
                </button>
            </a>
        </div>
    )
}
export default AuthorButtons;