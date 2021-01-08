import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <div className="ui relaxed divided list">
        {videos.map((videoItem) => (
          <VideoItem key={videoItem.id.videoId} video={videoItem} onVideoSelect={onVideoSelect} />
        ))}
    </div>
  );
};

export default VideoList;
