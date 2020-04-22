import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }


  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;


// "https://media0.giphy.com/media/dQCmKY4IgywFy/giphy.gif?cid=ecf05e472422cbe0652e9f6fa6ef4e775bfba027194833a8&rid=giphy.gif"

// https://media.giphy.com/media/dQCmKY4IgywFy/giphy.gif
