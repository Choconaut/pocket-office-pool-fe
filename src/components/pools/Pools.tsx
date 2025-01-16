import { Container, Row, Col, Card, Button, Spinner, Alert, InputGroup, FormControl, Badge } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import styles from "../leaderboard/Leaderboard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

interface Pool {
    id: string;
    name: string;
    start: string;
    end: string;
}

const Pools = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [pools, setPools] = useState<Pool[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchPools = async () => {
            try {
                const mockData: Pool[] = [
                    { id: '1', name: "Pool 1", start: "2022-01-01T00:00:00Z", end: "2022-01-31T23:59:59Z" },
                    { id: '2', name: "Pool 2", start: "2022-02-01T00:00:00Z", end: "2022-02-28T23:59:59Z" },
                    { id: '3', name: "Pool 3", start: "2022-03-01T00:00:00Z", end: "2022-03-31T23:59:59Z" },
                    { id: '4', name: "Pool 4", start: "2022-04-01T00:00:00Z", end: "2022-04-30T23:59:59Z" },
                ];

                await new Promise(resolve => setTimeout(resolve, 1000));

                setPools(mockData);
            } catch (err: any) {
                console.error(err.message || 'An error occurred while fetching pools data.');
                setError(err.message || 'An error occurred while fetching pools data.');
            } finally {
                setLoading(false);
            }
        };
        fetchPools();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredPools = pools.filter(pool =>
        pool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <Container className={`${styles.leaderboard} vh-100 d-flex justify-content-center align-items-center`}>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <Container className="my-4">
            <Row className="mb-3">
                <Col>
                    <h1 className="text-center">Pools</h1>
                </Col>
            </Row>

            {error && (
                <Row className="mb-3">
                    <Col>
                        <Alert variant="danger">
                            {error}
                        </Alert>
                    </Col>
                </Row>
            )}

            <Row className="mb-3">
                <Col md={6}>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Search Pools"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </Col>
                <Col md={6} className="text-md-end mt-2 mt-md-0">
                    <Button variant="success">
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        Add New Pool
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    {filteredPools.length === 0 ? (
                        <Alert variant="info">No pools found.</Alert>
                    ) : (
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {filteredPools.map(pool => (
                                <Col key={pool.id}>
                                    <Card className="h-100 shadow-sm">
                                        <Card.Body>
                                            <Card.Title className="d-flex justify-content-between align-items-center">
                                                <strong>{pool.name}</strong>
                                                <Button variant="primary" size="sm">
                                                    <FontAwesomeIcon icon={faEdit} className="me-1" />
                                                    Edit
                                                </Button>
                                            </Card.Title>
                                            <Card.Text>
                                                <Badge bg="info" className="mb-2">
                                                    Start: {new Date(pool.start).toLocaleDateString()}
                                                </Badge>
                                                <br />
                                                <Badge bg="warning" text="dark">
                                                    End: {new Date(pool.end).toLocaleDateString()}
                                                </Badge>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Pools;
