import React from 'react'

import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { GiPc } from "react-icons/gi";
import { RiSwitchLine } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { IconContext } from "react-icons";


const Platform = platform =>{

    const icons = {
        "1"     : <FaXbox />,
        "4"     : <GiPc />,
        "18"    : <FaPlaystation />,
        "3"     : <AiFillApple />,
        "7"     : <RiSwitchLine />,
        "21"    : <AiFillAndroid />
    }
    //console.log(platform);
    return (
        <>
            <IconContext.Provider value={{ size: "1.2em" }}>
                <span className="ml-1">{icons[platform.platform]}</span>
            </IconContext.Provider>
        </>
    )
}

export default Platform;