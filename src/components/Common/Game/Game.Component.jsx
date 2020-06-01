import React, { useState} from 'react';
import Platforms from '../Platforms-Icons/Platforms-Icons.Component';
import Card from 'react-bootstrap/Card';
import HoverVideoPlayer from 'react-hover-video-player';
import {Link} from 'react-router-dom';

import './../Game/game.css'

const Game = ({slug, name, released , genres, platforms, rating, background_image, clip}) => {

  const getVideo = (clip) =>{
    
    if(clip === null)
    { 
        clip = {clip:"unknow"};
    }

    return clip.clip; 
  } 

    const [video]= useState(getVideo(clip));

    const getGenres = () =>{ 
    if(Array.isArray(genres) && genres.length) 
      return genres.map(item => item.name).join(", ")         
    }

    return (
		<>
            <Card bg="dark" className="zoom">
              <div> 
                <HoverVideoPlayer  className="br-12-image-video" 
                    videoSrc={video}
                    loop={false}
                    pausedOverlay={
                        <img
                          src={background_image}
                          alt=""
                          style={{
                            // Make the image expand to cover the video's dimensions
                            width: "100%",
                            height: "100%",
                          }}
                          className="br-12-image-video"
                      />
                    }
                    loadingOverlay={
                        <img
                        src={background_image}
                        alt=""
                        style={{
                          // Make the image expand to cover the video's dimensions
                          width: "100%",
                          height: "100%",
                        }}
                        className="br-12-image-video"
                      />
                    }
                />
               
                <Card.Body>
                <Platforms platforms = {platforms} />
                <Card.Title className="card-name"><Link to={`/game/${slug}`} >{name}</Link></Card.Title>
                  <div className="info">
                    <span>Release date: {released}</span><br /> 
                    <span>Genres: {getGenres()} </span><br />
                    <span>Ratin: {rating} </span><br />
                  </div>
                </Card.Body>
                </div>
            </Card>
			<br />
		</>
    );
}
//
export default Game;

