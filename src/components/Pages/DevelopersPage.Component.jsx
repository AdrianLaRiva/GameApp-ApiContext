import React, {useContext, useState, useEffect} from 'react';
import {DevlopersContext} from '../../contexts/DevlopersContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DevelopersPage = () =>{

    const {doneFetchDevelopers, developers, loadMore} = useContext(DevlopersContext);

    const [loading_more, setLoadingMore] = useState(false);
    const [list_developers,setListDevelopers]= useState([]);

    useEffect(() => addGames(developers),[developers]);

    const addGames = (developers) =>{
       
        list_developers.length ? setListDevelopers([...list_developers,...developers]) : setListDevelopers(developers); 
        setLoadingMore(false);
    }

    const getMore = () =>{
        setLoadingMore(true);
        loadMore();
    }

    return(
        <>
            
                {    
                    doneFetchDevelopers ?
                        <Container>
                           <Row>
                                {     
                                    (list_developers.length ? 
                                    
                                        list_developers.map((developer, index) =>
                                            <Col md="4" key={index}>
                                                <Card bg="dark" >
                                                    <Card.Img variant="top" height="200px" src={developer.image_background}/>
                                                    <Card.Body>
                                                        <Card.Title className="card-name">{developer.name}</Card.Title>
                                                    </Card.Body>
                                                
                                                </Card>

                                            </Col>  
                                            )
                                        :
                                        ""        
                                    )
                                }
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col sm={"auto"}>
                                {
                                    loading_more && 
                                    <div className= "spinner-games">
                                        <Spinner animation="border" role="status" size ="xl">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    </div>
                                }
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col sm={"auto"}>
                                    <Button variant="primary" onClick={() => getMore()}>Load More</Button>
                                </Col>
                            </Row>
                        </Container>

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
            
        </>
    )

}    

export default DevelopersPage;