import React from 'react';

class VideoListItem extends React.Component{

  constructor(props){

    super(props);

    this.onVideoSelect = this.onVideoSelect.bind(this);

  }

  onVideoSelect(){
    this.props.onVideoSelect(this.props.video);
    console.log(this.props.video);
  }

  render() {

      const video = this.props.video;
      const onVideoSelect = this.props.onVideoSelect;
      const imageUrl = video.snippet.thumbnails.default.url;

      return (

          <li className="list-group-item" onClick={this.onVideoSelect}>

            <div className="video-list">
                    <img className="media-object"  src={imageUrl}/>
                    <div className="media-title">{video.snippet.title}</div>
            </div>
          </li>
      )
  }
}

export default VideoListItem;
