import React  from 'react';

class VideoDetail extends React.Component{

    render(){

        const videos = this.props.videos;
        const videoId = videos.id.videoId;

        const url = `https://www.youtube.com/embed/${videoId}`;

        return (

          <div className="video-detail">

              <div className="media">
                <div className="media__video">
                      <iframe src={url}  type="text/html" width="100%" 
                        height="650" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>

              <div className="details">
                <div>{videos.snippet.title}</div>
                <div>{videos.snippet.description}</div>
               </div>
            </div>

        )
    }

}


export default VideoDetail;