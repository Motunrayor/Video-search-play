import React from 'react';

 const VideoDetails = ({video}) => {
    if(!video) {
       return<div>loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
   return (
      <div className="ui segment">
         <div className="ui embed">
            <iframe src={videoSrc} title=""/>
         </div>
        <h4 className="header">{video.snippet.title}</h4>
        <p >{video.snippet.description}</p>
      </div>
   )
};

export default VideoDetails;

