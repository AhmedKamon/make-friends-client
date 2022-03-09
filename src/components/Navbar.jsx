import colorLogo  from '../images/color.png'
import whiteLogo  from '../images/white.png'
const Navbar = ({authToken, minimal, setShowModal,showModal}) => {
    return (
        <nav>
            <a href='/' className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="" />
            </a>
            { !authToken && !minimal && <button 
            onClick={()=>setShowModal(true)} disabled={showModal}
            className="nav-button">Log In</button>}
        </nav>
    );
};

export default Navbar;