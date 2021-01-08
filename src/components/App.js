import React from "react";
import Search from "./Search";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./videoDetails";

class App extends React.Component {
  state = { video: [], selectedVideo: null };
  onFormSubmit = async (text) => {
    const res = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({ video: res.data.items, selectedVideo: res.data.items[0]});
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
     this.onFormSubmit("software development")
  }
  render() {
    return (
      <div>
        <Search onTextSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
