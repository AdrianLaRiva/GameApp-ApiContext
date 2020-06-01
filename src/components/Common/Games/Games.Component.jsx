import React, { Fragment, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Game from '../Game/Game.Component';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './../Games/games.css'

const Games = ({games,loadMore}) => {
   
    const [loading_more, setLoadingMore] = useState(false);
    const [list_games,setListGames]= useState([]);

    useEffect(() => addGames(games),[games]);

    const addGames = (games) =>{
       
        list_games.length ? setListGames([...list_games,...games]) : setListGames(games); 
        setLoadingMore(false);
    }

    const getMore = () =>{
        setLoadingMore(true);
        loadMore();
    }

    return (
        <Fragment>
            <Container>
                    <Row className="mt-5">
                    
                        {
                            list_games.map((game,index) =>{
                                const{id, slug, name, released, genres,platforms,rating, clip, background_image} = game;
                                return (
                                    <Col key ={index} md={4}>
                                        <Game
                                            key                 = {id}
                                            slug                = {slug}
                                            name                = {name}
                                            released            = {released}
                                            genres              = {genres}
                                            platforms           = {platforms}
                                            rating              = {rating}
                                            background_image    = {background_image}
                                            clip                = {clip}                                          
                                        />
                                    </Col>
                                );    
                            
                            })
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
            
        </Fragment>

    );
}

export default Games;
