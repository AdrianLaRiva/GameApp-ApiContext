import React from 'react'
import Platform from '../Platform-Icon/Platform-Icon.Component';

const Platforms = ({platforms}) =>{

    return (
        <>
            <div>
                {  
                    platforms.map((item,index) =>{
                        return(
                        <Platform key={index} platform = {item.platform.id} />
                        );
                    })
                
                }
            </div>
        </>
    )
}

export default Platforms;