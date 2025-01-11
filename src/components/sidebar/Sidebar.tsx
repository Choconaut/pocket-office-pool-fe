import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencil, faUser, faTrophy, faSwimmer, faPhone, faSignOut} from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

    return (
        <div className="d-flex">
            <div className="bg-light text-dark p-3 rounded-2" style={{width: "250px", minHeight: "100vh"}}>
                <h5 className="text-center mb-2">Pocket Office Pool</h5>
                <hr className="mb-2"/>
                <ul className="nav flex-column">
                    <li className="nav-item mb-1">
                        <small className="text-muted">Pool Settings</small>
                        <button className="btn btn-outline-secondary text-dark nav-link w-100 text-start">
                            <FontAwesomeIcon icon={faSwimmer}/> My Pools
                        </button>
                    </li>
                    <li className="nav-item mb-1">
                        <button className="btn btn-outline-secondary text-dark nav-link w-100 text-start">
                            <FontAwesomeIcon icon={faPencil}/> My Picks
                        </button>
                    </li>
                    <li className="nav-item mb-1">
                        <button className="btn btn-outline-secondary text-dark nav-link w-100 text-start">
                            <FontAwesomeIcon icon={faTrophy}/> Rankings
                        </button>
                    </li>
                    <hr className="mb-5"/>
                    <small className="text-muted">Account</small>
                    <li className="nav-item mb-1">
                        <button className="btn btn-outline-secondary text-dark nav-link w-100 text-start">
                            <FontAwesomeIcon icon={faPhone}/> Help & Support
                        </button>
                    </li>
                    <li className="nav-item mb-1">
                        <button className="btn btn-outline-secondary text-dark nav-link w-100 text-start">
                            <FontAwesomeIcon icon={faUser}/> Settings
                        </button>
                    </li>
                    <li className="nav-item mb-1">
                        <button className="btn btn-outline-secondary text-dark nav-link w-100 text-start"
                                onClick={handleLogout}
                        >
                            <FontAwesomeIcon icon={faSignOut}/> Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;