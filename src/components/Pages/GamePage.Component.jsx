import React, {useContext} from 'react';
import {GameInfoContext} from '../../contexts/GameInfoContext';
import PlatformIcons from '../Common/Platforms-Icons/Platforms-Icons.Component';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Parser from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const GamePage = () => { 
    const { doneFetchGame, game} = useContext(GameInfoContext);

        return(
        <>
            <Container>
                {
                    (doneFetchGame) ?
                        <Row> 
                            
                            <Col md="12">
                                <h1>{game.name} <Badge variant="primary">{game.released}</Badge></h1>
                            </Col>
                            <Col md="12">
                                <PlatformIcons platforms ={game.platforms} /><br/>
                            </Col>
                            <Col md="12">
                                {Parser(game.description)}
                            </Col>
                            <Col md="12">
                                <img src={game.background_image} width="100%" alt={game.name}/>
                            </Col>
                        </Row>
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

export default GamePage;