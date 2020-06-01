import React, {useContext, useEffect} from 'react';
import Games from '../Common/Games/Games.Component';
import {GamesContext} from '../../contexts/GamesContext';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => { 

    const {doneFetch, games, loadMore, getGames} = useContext(GamesContext);

    useEffect(() => getGames(),[]);

    return (
        <>
            {    
                doneFetch ?
                    (games.length ? 
                        <Games 
                            games           = {games} 
                            loadMore        = {loadMore} 
                        />
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
        </>
    );
}
export default Home;
