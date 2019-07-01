import React from "react"

class Player extends React.Component {
  render() {
    console.log(this.props.currentSong)
    console.log(this.props.playSongs)
    return (
      <div>
        player
      </div>
    )
  }
}

export default Player;