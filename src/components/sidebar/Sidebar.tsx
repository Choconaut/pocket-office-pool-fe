import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencil, faUser, faTrophy, faSwimmer, faPhone, faSignOut, faBars
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
    activeTab: string;
    onSelect: (tab: string) => void;
    handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelect, handleLogout }) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTabClick = (tab: string) => {
        onSelect(tab);
        handleClose();
    };

    return (
        <div>
            <div className={`${styles.minimizeButton}`}>
                {/* Toggle Button for Small Screens */}
                <Button
                    variant="primary"
                    className="d-md-none position-absolute bg-transparent border-0 text-dark"
                    onClick={handleShow}
                    aria-label="Open Sidebar"
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </div>
            {/* Offcanvas for Small Screens */}
            <Offcanvas show={show} onHide={handleClose} responsive="md">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarContent
                        activeTab={activeTab}
                        onSelect={handleTabClick}
                        handleLogout={handleLogout}
                    />
                </Offcanvas.Body>
            </Offcanvas>

            <div className={`${styles.sidebar} d-none d-md-block rounded-3`}>
                <h5 className="text-center mb-4">Menu</h5>
                <SidebarContent
                    activeTab={activeTab}
                    onSelect={handleTabClick}
                    handleLogout={handleLogout}
                />
            </div>
        </div>
    );
};

interface SidebarContentProps {
    activeTab: string;
    onSelect: (tab: string) => void;
    handleLogout: () => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ activeTab, onSelect, handleLogout }) => {
    return (
        <ul className="nav flex-column">
            <li className="nav-item mb-3">
                <small className="text-muted">Pool Settings</small>
                {/* Pools */}
                <Button
                    variant={activeTab === 'mypools' ? 'secondary' : ''}
                    className={`text-start w-100 ${activeTab === 'mypools' ? styles.active : ''}`}
                    onClick={() => onSelect('mypools')}
                >
                    <FontAwesomeIcon icon={faSwimmer} className="me-2" />
                    My Pools
                </Button>
            </li>

            {/* Picks */}
            <li className="nav-item mb-3">
                <Button
                    variant={activeTab === 'mypicks' ? 'secondary' : ''}
                    className={`text-start w-100 ${activeTab === 'mypicks' ? styles.active : ''}`}
                    onClick={() => onSelect('mypicks')}
                >
                    <FontAwesomeIcon icon={faPencil} className="me-2" />
                    My Picks
                </Button>
            </li>

            {/* Leaderboard */}
            <li className="nav-item mb-4">
                <Button
                    variant={activeTab === 'leaderboard' ? 'secondary' : ''}
                    className={`text-start w-100 ${activeTab === 'leaderboard' ? styles.active : ''}`}
                    onClick={() => onSelect('leaderboard')}
                >
                    <FontAwesomeIcon icon={faTrophy} className="me-2" />
                    Leaderboard
                </Button>
            </li>

            <hr />

            {/* Account */}
            <li className="nav-item mb-3">
                <small className="text-muted">Account</small>
                <Button
                    variant={activeTab === 'help-support' ? 'secondary' : ''}
                    className={`text-start w-100 ${activeTab === 'help-support' ? styles.active : ''}`}
                    onClick={() => onSelect('help-support')}
                >
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    Help & Support
                </Button>
            </li>

            {/* Settings */}
            <li className="nav-item mb-4">
                <Button
                    variant={activeTab === 'settings' ? 'secondary' : ''}
                    className={`text-start w-100 ${activeTab === 'settings' ? styles.active : ''}`}
                    onClick={() => onSelect('settings')}
                >
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Settings
                </Button>
            </li>

            {/* Log out */}
            <li className="nav-item">
                <Button
                    variant=""
                    className="text-start w-100"
                    onClick={handleLogout}
                >
                    <FontAwesomeIcon icon={faSignOut} className="me-2" />
                    Logout
                </Button>
            </li>
        </ul>
    );
};

export default Sidebar;
