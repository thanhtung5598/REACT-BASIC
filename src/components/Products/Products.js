import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Row, Col
} from 'reactstrap';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [
                {
                    "id": 1,
                    "name": "Tuna - Salad Premix",
                    "imageURL": "http://dummyimage.com/300x200.bmp/cc0000/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 2,
                    "name": "Bread - Hamburger Buns",
                    "imageURL": "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 3,
                    "name": "Oysters - Smoked",
                    "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 4,
                    "name": "Milk 2% 500 Ml",
                    "imageURL": "http://dummyimage.com/300x200.bmp/dddddd/000000",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 5,
                    "name": "Salsify, Organic",
                    "imageURL": "http://dummyimage.com/300x200.bmp/ff4444/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 6,
                    "name": "Syrup - Monin - Passion Fruit",
                    "imageURL": "http://dummyimage.com/300x200.bmp/dddddd/000000",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 7,
                    "name": "Pepper Squash",
                    "imageURL": "http://dummyimage.com/300x200.png/ff4444/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 8,
                    "name": "Chocolate - Milk",
                    "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 9,
                    "name": "Foam Cup 6 Oz",
                    "imageURL": "http://dummyimage.com/300x200.bmp/cc0000/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }, {
                    "id": 10,
                    "name": "Beef - Tenderloin",
                    "imageURL": "http://dummyimage.com/300x200.png/ff4444/ffffff",
                    "description": "error: undefined method `/' for nil:NilClass"
                }
            ]
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
