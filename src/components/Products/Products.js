import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Row, Col
} from 'reactstrap';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products:[{
                "id": 1,
                "name": "Cookie Dough - Chocolate Chip",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 2,
                "name": "Veal - Leg, Provimi - 50 Lb Max",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 3,
                "name": "Meldea Green Tea Liquor",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 4,
                "name": "Versatainer Nc - 8288",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 5,
                "name": "Scallops - In Shell",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 6,
                "name": "Cinnamon - Ground",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 7,
                "name": "Cocoa Butter",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 8,
                "name": "Oil - Avocado",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 9,
                "name": "Cheese - Cambozola",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }, {
                "id": 10,
                "name": "Apricots Fresh",
                "imageURL": "https://loremflickr.com/300/200",
                "description": "error: undefined method `/' for nil:NilClass"
              }]
        }
    }
    render() {
        const { Products } = this.state;
        return (
            <Container>
                <Row>
                        {
                            Products.map(item => (
                                <Col md="4">
                                    <Card>
                                        <CardImg top width="100%" src={item.imageURL} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardText>{item.description}</CardText>
                                            <Button>Add to card</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                )
                            )
                        }
                </Row>
            </Container >

        )
    }
}
