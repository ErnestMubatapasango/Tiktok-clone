import React, {useState} from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes, comments, shares}) {

    const[liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
           <div className="videoSidebar_Icons">
               {liked? (
                <FavoriteIcon
                    fontsize="large"
                    onClick={(e) => setLiked(false)} 
                />
               ): ( 
                   <FavoriteBorderIcon
                        fontsize="large"
                        onClick={(e) => setLiked(true)}
                   />
               )}
               <p>{liked? likes + 1 : likes}</p>
               
           </div>

           <div className="videoSidebar_Icons">
               <CommentIcon/>
               <p>{comments}</p>
           </div>

           <div className="videoSidebar_Icons">
               <ShareIcon/>
               <p>{shares}</p>
           </div>

        </div>
    )
}

export default VideoSidebar
