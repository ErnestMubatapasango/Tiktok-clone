import React, {useState, useEffect} from 'react';
import Video from './Video.js';
import './App.css';

import db from './firebase'


function App() {

  const[videos, setVideos] = useState([]);

  useEffect(() => {
        db.collection('videos').onSnapshot(snapshot =>
          setVideos(snapshot.docs.map(doc => doc.data()))
           )
  }, [videos])

  return (
    <div className="app">
        <div className="app_videos">

          {videos.map(
            ({likes,channel,description,song,shares,comments,url}) => (
            <Video
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                comments={comments}
                shares={shares}
            />
           
            
          ))}
        </div>
      </div>

  );
}

export default App;
