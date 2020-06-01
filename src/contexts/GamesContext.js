import React, {createContext, useState} from 'react';
import {gamesGet} from '../constants/index';
import {loadMoreGet} from '../constants/index';
import {default_platfoms_ids} from '../constants/constans';

export const GamesContext = createContext();

const GamesContextProvider = ({children}) => {
    
    const [doneFetch, setDoneFetch] = useState(false);
    const [games, setGames] = useState([]);
    const [nextPage, SetNextPage] = useState();


    const getGames = (platforms_id=default_platfoms_ids) =>{
        setGames([]);
        setDoneFetch(false);
        
        fetch(gamesGet(platforms_id))
        .then(response => response.json())
        .then(data =>{
            setDoneFetch(true);
            setGames(data.results)
            SetNextPage(data.next)
        })
        .catch(e => console.log(e));
    }

    const loadMore = () =>{
        fetch(loadMoreGet(nextPage))
        .then(response => response.json())
        .then(data =>{
            setDoneFetch(true);
            setGames(data.results);
            SetNextPage(data.next)
        })
        .catch(e => console.log(e));
    }

    return(
        <GamesContext.Provider value={{doneFetch, games, loadMore, getGames}}>
            {children}
        </GamesContext.Provider>
    )

}

export default GamesContextProvider;