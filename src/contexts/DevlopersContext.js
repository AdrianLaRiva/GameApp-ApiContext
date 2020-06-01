import React, {createContext, useState, useEffect} from 'react';
import {developersGet} from './../constants';
import {loadMoreGet} from './../constants';

export const DevlopersContext = createContext();

const DevlopersContextProvider = ({children}) => {
    
    const [doneFetchDevelopers, setDoneFetchDevelopers] = useState(false);
    const [nextPage, SetNextPage] = useState();
    const [developers, setDevelopers] = useState([]);

    useEffect(() => getDevelopers(), []);

    const getDevelopers = () => {
        fetch(developersGet(nextPage))
            .then(res => res.json())
            .then(data => {
                setDevelopers(data.results);
                setDoneFetchDevelopers(true);
                SetNextPage(data.next);
            })
            .catch(err => console.log(err));

    }

    const loadMore = () =>{
        fetch(loadMoreGet(nextPage))
        .then(response => response.json())
        .then(data =>{
            setDoneFetchDevelopers(true);
            setDevelopers(data.results);
            SetNextPage(data.next);
        })
        .catch(e => console.log(e));
    }

    return (
        <DevlopersContext.Provider value= {{doneFetchDevelopers, developers, loadMore}}>
            {children}
        </DevlopersContext.Provider>
    )
}


export default DevlopersContextProvider;