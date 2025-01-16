import React, { useState, useEffect } from 'react';
import styles from './HomeView.module.css';
import Leaderboard from "../../components/leaderboard/Leaderboard";
import Picks from "../../components/picks/Picks";
import Pools from "../../components/pools/Pools";
import Sidebar from "../../components/sidebar/Sidebar";
import Support from "../../components/help-support/Support";
import Settings from "../../components/settings/Settings";

const HomeView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('mypools');

    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const handleTabSelect = (tab: string) => {
        setActiveTab(tab);
    };

    const handleLogout = () => {
        window.location.href = '/login'; // Example redirect
    };

    const renderActiveComponent = () => {
        switch (activeTab) {
            case 'mypools':
                return <Pools />;
            case 'mypicks':
                return <Picks />;
            case 'leaderboard':
                return <Leaderboard />;
            case 'help-support':
                return <Support />;
            case 'settings':
                return <Settings />;
            default:
                return <Pools />;
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <Sidebar
                activeTab={activeTab}
                onSelect={handleTabSelect}
                handleLogout={handleLogout}
            />

            {/* Main Content Area */}
            <div className={styles.mainContent}>
                {renderActiveComponent()}
            </div>
        </div>
    );
};

export default HomeView;
