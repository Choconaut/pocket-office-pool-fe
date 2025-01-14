import React, { useEffect, useState } from "react";
import styles from './Leaderboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

interface User {
    name: string;
    points: number;
}

const Leaderboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch leaderboard data from an API or use mock data
        const fetchLeaderboard = async () => {
            try {
                // Mock data
                const mockData: User[] = [
                    { name: "Alice", points: 15 },
                    { name: "Bob", points: 14 },
                    { name: "Charlie", points: 13 },
                    { name: "Diana", points: 12 },
                    { name: "Ethan", points: 11 },
                    { name: "Ivy", points: 11 },
                    { name: "George", points: 11 },
                    { name: "Hannah", points: 10 },
                    { name: "Jack", points: 10 },
                    { name: "Kelly", points: 10 },
                    { name: "Liam", points: 9 },
                    { name: "Mia", points: 9 },
                    { name: "Noah", points: 9 },
                ];

                // Replace with actual API call
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Sort users by points descending
                const sortedData = mockData.sort((a, b) => b.points - a.points);
                setUsers(sortedData);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching leaderboard data.');
            } finally {
                setLoading(false); // Ensure loading is set to false after fetching
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) {
        return (
            <div className={`${styles.leaderboard} vh-100`}>
                <div className={styles.loadingSpinner}></div>
            </div>
        );
    }

    if (error) {
        return <div className={`${styles.leaderboard} ${styles.errorMessage}`}>Error: {error}</div>;
    }

    if (users.length === 0) {
        return <div className={styles.leaderboard}>No users to display.</div>;
    }

    // Ensure there are at least 3 users
    const topThree = users.slice(0, 3);
    const others = users.slice(3);

    const rearrangedTopThree = [
        topThree[1], // Rank 2
        topThree[0], // Rank 1
        topThree[2], // Rank 3
    ];

    // Assign icons and colors based on rank
    const getIcon = (rank: number) => {
        switch(rank) {
            case 1:
                return <FontAwesomeIcon icon={faMedal} className={`${styles.icon} ${styles.gold} ${styles.iconGold}`} />;
            case 2:
                return <FontAwesomeIcon icon={faMedal} className={`${styles.icon} ${styles.iconSilver}`} />;
            case 3:
                return <FontAwesomeIcon icon={faMedal} className={`${styles.icon} ${styles.iconBronze}`} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.leaderboard}>
            <h3 className={styles.header}>Leaderboard</h3>

            {/* Top Three Pedestals */}
            <div className={styles.pedestalContainer}>
                {rearrangedTopThree.map((user, index) => {
                    // Determine actual rank based on original topThree
                    const originalIndex = topThree.findIndex(u => u.name === user.name);
                    const rank = originalIndex + 1;

                    return (
                        <div
                            key={`${user.name}-${rank}`}
                            className={`${styles.pedestal} ${
                                rank === 1
                                    ? styles.pedestalGold
                                    : rank === 2
                                        ? styles.pedestalSilver
                                        : styles.pedestalBronze
                            }`}
                        >
                            {getIcon(rank)}
                            <div className={styles.name}>{user.name}</div>
                            <div className={styles.points}>{user.points} pts</div>
                        </div>
                    );
                })}
            </div>

            {/* Other Users Scrollable List */}
            <div className={styles.otherUsersContainer}>
                {others.map((user, index) => (
                    <div key={`${user.name}-${index}`} className={styles.otherUser}>
                        <div className={styles.otherUserRank}>{index + 4}</div>
                        <div className={styles.otherUserName}>{user.name}</div>
                        <div className={styles.otherUserPoints}>{user.points} pts</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
