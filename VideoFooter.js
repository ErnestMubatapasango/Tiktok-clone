import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
          <div className="videoFooter_text">
                <h3>@{channel}</h3> 
                <p>{description}</p>

                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>
                    <Ticker className="ticker" mode="smooth">
                      {({index}) =>(
                        <>
                        <p>{song}</p>
                        </>
                      )}
                    </Ticker>
                 </div>
          </div>
        <img className="videoFooter_record" src="https://static.thenounproject.com/png/72293-200.png" alt=""/>
            
        </div>
    )
}
//https://static.thenounproject.com/png/933821-200.png

export default VideoFooter
