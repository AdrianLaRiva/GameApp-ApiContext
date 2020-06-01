import React, {createContext, useState} from 'react';
import {genderGet} from '../constants';


export const GenderContext = createContext();

const GenderContextProvider = ({children}) => {

   
    const [doneFetchGender, setDoneFetchGender] = useState(false);
    const [gender, setGender] = useState([]);

    const getGender = gender_slug => {
        fetch(genderGet(gender_slug))
            .then(res => res.json())
            .then(data => {
                setDoneFetchGender(false);
                setGender(data);
                setDoneFetchGender(true);
            })
            .catch(err => console.log(err));

    }

    return (
        <GenderContext.Provider value= {{doneFetchGender, gender, getGender}}>
            {children}
        </GenderContext.Provider>
    )
}


export default GenderContextProvider;