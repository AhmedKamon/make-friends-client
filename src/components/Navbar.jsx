import colorLogo  from '../images/color.png'
import whiteLogo  from '../images/white.png'
const Navbar = ({ minimal, setShowModal,showModal,setIsSignup}) => {
    const handelClick = () =>{
        setIsSignup(false)
        setShowModal(true)
    }
    const authToken = false
    return (
        <nav>
            <a href='/' className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="" />
            </a>
            { !authToken && !minimal && <button 
            onClick={handelClick} disabled={showModal}
            className="nav-button">Log In</button>}
        </nav>
    );
};

export default Navbar;