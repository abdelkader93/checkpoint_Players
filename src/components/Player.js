// Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={imageUrl} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team} <br />
                    <strong>Nationality:</strong> {nationality} <br />
                    <strong>Jersey Number:</strong> {jerseyNumber} <br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

// Player.defaultProps = {
//     name: "Unknown Player",
//     team: "Unknown Team",
//     nationality: "Unknown",
//     jerseyNumber: 0,
//     age: "N/A",
//     imageUrl: "https://via.placeholder.com/150"
// };

export default Player;
