import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "7ltN7lCgF2MQE"
    }
  }

  render() {


    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
      );
  }
}


export default App;

    // const gifs = [
    //   { id: "7ltN7lCgF2MQE" },
    //   { id: "dQCmKY4IgywFy" },
    //   { id: "zMwItkWskte1O" },
    //   { id: "fnR1k3CZLQt3y" },
    //   { id: "l0K48Nkf6bS1TcuHK" },
    //   { id: "kB2uyoigIXPMI" },
    //   { id: "3osxYdWVNeMVIXCJcA" },
    //   { id: "l0MYIbxbaWz3T48lq" },
    //   { id: "26zzni2uTPRVJWt7W" },
    // ];
