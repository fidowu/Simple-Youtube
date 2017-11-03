
import lodash from 'lodash';
import React  from 'react';
import SearchBar  from './search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './videolist';
import VideoDetail from './video-details';

const API_KEY ="AIzaSyAviJBGvwPkrXGXkUP_oxFV9zYBpyDxz_8"; //youtube key
//npm install --save youtube-api-search

class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			 videos: [],
        	selectedVideo : null

		}
		this.setSearchString = this.setSearchString.bind(this);
		this.onVideoSelect = this.onVideoSelect.bind(this);
	}
  

    setSearchString(searchString){
        var thisJsx = this;

        YTSearch({key: API_KEY, term: searchString}, function(videos){

            thisJsx.setState({videos})
            thisJsx.setState({selectedVideo : thisJsx.state.videos[0]})

            
        })
    }

 	onVideoSelect(video){

      this.setState({selectedVideo : video})

    }

    render(){


    const videoSearch = lodash.debounce(this.setSearchString,600);

    return (

      <div className="main">

        <SearchBar setSearchString={videoSearch}/>

        <div className="video-container">

          {this.state.selectedVideo &&
            <VideoDetail videos={this.state.selectedVideo} />
          }

          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>

        </div>

      </div>
    )

  }
}

export default App;