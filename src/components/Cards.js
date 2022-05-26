import React from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";

export default function Cards(props) {
    const Data = [{
        "id": 1,
        "name": "Asqar",
        "age": 25,
        "city": "Almaty",
        "gender": "male",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjx4UieqE-Bepuju7kdcIqS8OWWqaxW3K90A&usqp=CAU",
        "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus sapiente sit voluptatibus magnam nulla dolores dolorum blanditiis expedita maxime."
    },
    {   
        "id": 2,
        "name": "Arman",
        "age": 30,
        "city": "Astana",
        "gender": "male",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR86Fko4BWIZ6zVtEnvIhUd0qv9fL0G5g-uA&usqp=CAU",
        "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus sapiente sit voluptatibus magnam nulla dolores dolorum blanditiis expedita maxime."
    },
    {   
        "id": 3,
        "name": "Ainur",
        "age": 22,
        "city": "Shymkent",
        "gender": "female",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNoyQswpIk9LhbJ3AnmjS_b0wuZ1p7pBRtw&usqp=CAU",
        "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas necessitatibus sapiente sit voluptatibus magnam nulla dolores dolorum blanditiis expedita maxime."
    }
]
    return (
        <>
        <h2 className="staffs_header">Our Staffs</h2>
        <div className="staffs">
            {Data.map(staff=>{
                return(
                    <Row>       
                        <Col>
                            <Card 
                                className="shadow staffs"
                                style={{ width: '18rem'}}
                                border="secondary"
                            >
                                <Card.Img variant="top" src={staff.img} />
                                <Card.Body>
                                    <Card.Title>{staff.name}</Card.Title>
                                    <Card.Text>
                                        <p>{staff.text}</p>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                )
            })}                    
        </div>
        </>
    )
};
