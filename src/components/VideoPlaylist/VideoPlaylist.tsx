import React from 'react';

const Video = () => {
  return <div>Video</div>;
};

const VideoPlaylist = (videos) => {
  return videos.map((video) => {
    return <Video />;
  });
};

export default VideoPlaylist;
