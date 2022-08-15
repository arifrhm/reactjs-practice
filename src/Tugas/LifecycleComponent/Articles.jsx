import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card, Button} from 'react-bootstrap'
import './Styling.scss';

const Articles = ({article}) => {
    return (
        <Col md={4} xs={6} className = "cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Button href={article.url} className="read-news">Read More...</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Articles;
