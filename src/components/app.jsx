import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "7ltN7lCgF2MQE"
    };
  }

  search = (query) => {
    // API Call
    giphy('tvUADK9NylWO9Xx8v8T9QBUyo8NgaRni').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
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
