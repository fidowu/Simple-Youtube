import React from 'react';
import VideoListItem from './video-list-item';

class VideoList extends React.Component{

  render() {
      const onVideoSelect = this.props.onVideoSelect;
      const videoItems = this.props.videos.map(function(video, index){
          return (<VideoListItem onVideoSelect={onVideoSelect} video={video} key={video.etag}/>)
      });

      return(

        <div className="video-ul" >
          <ul className="col-md-4 list-group">
              {videoItems}
          </ul>
        </div>
      )
  }
};

export default VideoList;
