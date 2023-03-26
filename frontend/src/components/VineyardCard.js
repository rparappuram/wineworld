import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// Import Button from 'react-bootstrap/esm/Button';
import ECHighlighter from "react-ec-highlighter";
import { Link } from 'react-router-dom';
import { handleVineyardImageError } from '../util/handleImageError';


const VineyardCard = props => {
    const { id, name, country, price, rating, reviews, image } = props.vineyard;

    function highlightText(input) {
        if (props.regex != null) {
          return <ECHighlighter searchPhrase={props.regex} text={input} />;
        }
        return input;
      }

    return (
        <Card border="dark" style={{ height: '30rem', width: '18rem' }}>
            <Card.Img
                variant="top"
                src={image}
                style={{ height: '50%', width: '100%', objectFit: 'cover' }}
                onError={handleVineyardImageError}
            />
            <Card.Body>
                <Card.Title> {highlightText(name)} </Card.Title>
                <Card.Subtitle> {highlightText(country)} </Card.Subtitle>
                <Card.Text>
                    Price Level: {price}
                    <br />
                    Rating: {rating}
                    <br />
                    Review Count: {reviews}
                </Card.Text>
            </Card.Body>

    );
};
export default VineyardCard;
