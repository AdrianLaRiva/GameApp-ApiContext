import React, {useContext, useEffect} from 'react';
import {GenderContext} from '../../contexts/GenderContext';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Parser from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams} from 'react-router-dom';


const GenderPage = () => { 
    
    const { id } = useParams();
    
    const {doneFetchGender, gender, getGender} = useContext(GenderContext);

    useEffect(() => getGender(id),[id]);
        return(
        <>
            <Container>
            {   
                doneFetchGender ?
                    ( (gender) ?
                            <Row> 
                            <Col md="12">
                                <h1>{gender.name} <Badge variant="primary">{gender.games_count} Games</Badge></h1>
                            </Col>
                            <Col md="12">
                                {Parser(gender.description)}
                            </Col>
                            <Col md="12">
                                <img src={gender.image_background} width="100%" alt={gender.name}/>
                            </Col>  

                        </Row>
                    :
                        ""
                    )
                : 
                <div
                    style={{
                        position: 'absolute', left: '50%', top: '25%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    >
                    <Spinner animation="border" role="status" size ="xl">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>

            }
            </Container>
        </>
    )
}

export default GenderPage;