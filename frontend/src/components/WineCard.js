import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// Import Button from "react-bootstrap/esm/Button";
import { handleWineImageError } from '../util/handleImageError';
import ECHighlighter from "react-ec-highlighter";
import { Link } from 'react-router-dom';


const WineCard = props => {
    const { id, name, country, region, type, winery, rating, reviews, image } = props.wine;

    function highlightText (input) {
        if (props.regex != null) {
          return <ECHighlighter searchPhrase={props.regex} text={input} />
        }
        return input
      }    

    return (
        // <Card border="dark" style={{ width: "80%", height: "50%" }}>
        <Card border="dark" style={{ height: '35rem', width: '18rem' }}>
            {/* <Card.Img class="rounded mx-auto d-block" variant="top" style={{width: 50}} src={image} /> */}
            <Card.Img
                class="img-thumbnail"
                variant="top"
                src={image}
                style={{ height: '50%', width: '100%', objectFit: 'contain' }}
                onError={handleWineImageError}
            />
            <Card.Body>
                <Card.Title>
                    {' '}
                    <small> {highlightText(name)}  </small>{' '}
                </Card.Title>
                <Card.Subtitle> {highlightText(type)} Wine </Card.Subtitle>
                <Card.Text>
                    Country: {highlightText(country)} 
                    <br />
                    Region: {highlightText(region)} 
                    <br />
                    Winery: {highlightText(winery)} 
                    <br />
                    Rating: {rating}
                    <br />
                    Reviews: {reviews}
                </Card.Text>
            </Card.Body>
            <div class="card-footer">
                <Link to={`/Wines/${id}`} class="btn btn-secondary stretched-link">
                    View Wine
                </Link>
            </div>
        </Card>
    );
};
export default WineCard;
