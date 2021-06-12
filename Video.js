import React, {useRef, useState} from 'react';
import "./Video.css";
import VideoSidebar from './VideoSidebar';
import VideoFooter from './VideoFooter';


function Video({likes,comments,shares,channel,description,song,url}) {
    const [playing, setPlaying] = useState(false);
    const videoRef  = useRef(null);
    

    const onVideoPress = () => {
       videoRef.current.play(); 

       if(playing)
       {
            videoRef.current.pause();
            setPlaying(false);
       }
       else
       {
           videoRef.current.play();
           setPlaying(true);
       }

    };
    return (
        <div className="video">
   
                    <video  
                     className="video_player"
                    onClick = {onVideoPress}
                    ref = {videoRef}
                    src={url}
                    loop

                    ></video>
           

            {/**videoFooter */}
          <VideoFooter
              channel={channel}
              description={description}
              song={song}
            />
            
          {/**videoSideBar */}
             <VideoSidebar
              likes={likes}
              comments={comments}
              shares={shares}
            />
          
                      
        </div>
    );
}

export default Video;
