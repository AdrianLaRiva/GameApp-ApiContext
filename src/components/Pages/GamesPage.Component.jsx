import React, {useContext, useState,useEffect} from 'react';
import {GamesContext} from '../../contexts/GamesContext';
import {useParams} from 'react-router-dom';
import {platforms} from '../../constants/constans';
import Games from '../Common/Games/Games.Component';
import PlatformIcon from '../Common/Platform-Icon/Platform-Icon.Component';
import Spinner from 'react-bootstrap/Spinner';

const GamesPage = () => { 
    
    const getCurrrenPlatform = (platform_id) => {
        return platforms.find(item => item.slug === platform_id);
    }

    const { id } = useParams();
    const {doneFetch, games, loadMore, getGames, gameVideo, getGameVideo} = useContext(GamesContext);
    const [current_platform, setCurrentPlaform] = useState(getCurrrenPlatform(id));

    useEffect(() => getData(id),[id]);

    const getData = () =>{
        const current = getCurrrenPlatform(id);

        return (
            setCurrentPlaform(current),
            getGames(current.id)

        )

    }
        return(
        <>
         <h1>Games For {current_platform.name} <PlatformIcon platform = {current_platform.id}/></h1> 

         {    
                doneFetch ?
                    (games.length ? 
                        <Games 
                            games           = {games} 
                            loadMore        = {loadMore} 
                            getGameVideo    = {getGameVideo} 
                            gameVideo       = {gameVideo} 
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
    )
}

export default GamesPage;