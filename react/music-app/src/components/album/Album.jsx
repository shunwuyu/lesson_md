import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import Header from "@/common/header/Header";
import Scroll from "@/common/scroll/Scroll";
import Loading from "@/common/loading/Loading";
import { getAlbumInfo } from "@/api/recommend";
import { CODE_SUCCESS } from "@/api/config";
import { getSongVKey } from "@/api/song";
import * as AlbumModel from "@/model/album";
import * as SongModel from "@/model/song";
import "./album.styl"

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      loading: true,
      album: {},
      songs: [],
      refreshScroll: false
    }
  }
  /**
 * 播放全部
 */
playAll = () => {
  if (this.state.songs.length > 0) {
      //添加播放歌曲列表
      this.props.setSongs(this.state.songs);
      this.props.changeCurrentSong(this.state.songs[0]);
      this.props.showMusicPlayer(true);
  }
}
  /**
 * 选择歌曲
 */
  selectSong(song) {
    return (e) => {
      this.props.setSongs([song]);
      this.props.changeCurrentSong(song);
    };
  }
  getSongUrl(song, mId) {
    getSongVKey(mId).then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          if (res.data.items) {
            let item = res.data.items[0];
            // http://dl.stream.qqmusic.qq.com/C4000040d46h30h1sA.m4a?vkey=E16060E12C3F800E65C6616D1A71492A8A89F52FFC7CCC717402A28A58EDE4CE3D5D8C15C8EA8E2AC34261B255722B11D348E4E97A571A71&guid=3655047200&fromtag=66
            song.url = `http://dl.stream.qqmusic.qq.com/${item.filename}?vkey=${item.vkey}&guid=3655047200&fromtag=66`
          }
        }
      }
    });
  }
  componentDidMount() {
    let albumBgDOM = ReactDOM.findDOMNode(this.refs.albumBg);
    let albumContainerDOM = ReactDOM.findDOMNode(this.refs.albumContainer);
    albumContainerDOM.style.top = albumBgDOM.offsetHeight + "px";

    getAlbumInfo(this.props.match.params.id).then((res) => {
      console.log("获取专辑详情：");
      if (res) {
        console.log(res);
        if (res.code === CODE_SUCCESS) {
          let album = AlbumModel.createAlbumByDetail(res.data);
          album.desc = res.data.desc;

          let songList = res.data.list;
          let songs = [];
          songList.forEach(item => {
            // 这一步没有产生 歌曲 url
            let song = SongModel.createSong(item);
            //获取歌曲vkey
            this.getSongUrl(song, item.songmid);
            songs.push(song);
          });
          this.setState({
            loading: false,
            album: album,
            songs: songs
          }, () => {
            //刷新scroll
            this.setState({ refreshScroll: true });
          });
        }
      }
    });
    this.setState({
      show: true
    });
  }

  render() {
    let album = this.state.album;
    let songs = this.state.songs.map((song) => {
      return (
        <div className="song" key={song.id} onClick={this.selectSong(song)}>
          <div className="song-name">{song.name}</div>
          <div className="song-singer">{song.singer}</div>
        </div>
      );
    });
    return (
      <CSSTransition in={this.state.show} timeout={300} classNames="translate">
        <div className="music-album">
          <Header title={album.name} ref="header"></Header>
          <div style={{ position: "relative" }}>
            <div ref="albumBg" className="album-img" style={{ backgroundImage: `url(${album.img})` }}>
              <div className="filter"></div>
            </div>
            <div ref="albumFixedBg" className="album-img fixed" style={{ backgroundImage: `url(${album.img})` }}>
              <div className="filter"></div>
            </div>
            <div className="play-wrapper" ref="playButtonWrapper">
              <div className="play-button">
                <i className="icon-play"></i>
                <span onClick={this.playAll}>播放全部</span>
              </div>
            </div>
          </div>
          <div ref="albumContainer" className="album-container">
            <div className="album-scroll" style={this.state.loading === true ? { display: "none" } : {}}>
              <Scroll refresh={this.state.refreshScroll}>
                <div className="album-wrapper">
                  <div className="song-count">专辑 共{songs.length}首</div>
                  <div className="song-list">
                    {songs}
                  </div>
                  <div className="album-info" style={album.desc ? {} : { display: "none" }}>
                    <h1 className="album-title">专辑简介</h1>
                    <div className="album-desc">
                      {album.desc}
                    </div>
                  </div>
                </div>
              </Scroll>
            </div>
            <Loading title="正在加载..." show={this.state.loading} />
          </div>
        </div>
      </CSSTransition>
    );
  }
}


export default Album
