import React, {Component} from 'react';
import cd from '../src/images/cd.png';
import rewindBlack from '../src/images/rewind_black.svg';
import rewindGray from '../src/images/rewind_gray.svg';
import playBlack from '../src/images/play_black.svg';
import playGray from '../src/images/play_gray.svg';
import forwardBlack from '../src/images/forward_black.svg';
import forwardGray from '../src/images/forward_gray.svg';
import pauseGray from '../src/images/pause_gray.svg';
import pauseBlack from '../src/images/pause_black.svg';
import arrowGray from '../src/images/arrow_gray.svg';
import arrowBlack from '../src/images/arrow_black.svg';
import AudioPlayer from 'react-modular-audio-player';
import albums from './songslist.js';
import classnames from 'classnames';


class SectionTwo extends Component {
	constructor() {
		super();
		this.state = {
			playlist: [],
			album: albums[0].name,
			current_album: albums[0].name,
			songs: albums[0].songs,
			current_song: "Play your favourite song",
			src: '',
			current_src: [{src: ''}]
		}
	}

	componentDidMount() {
		let playlist = [];
		albums[0].songs.forEach((song) => {
			playlist.push({src: song.src})
		});

		this.setState({
			playlist
		})
	}

	seleted_album(album){
		let playlist = [];
		album.songs.forEach((song) => {
			playlist.push({src: song.src});
		});
		this.setState({
			"album": album.name,
			"songs": album.songs,
			"current_album": album.name,
			playlist
		});
	}

	current_song(index, song, albums){
		document.getElementById("play").click();
		let current_album = albums.filter(album => album.name === this.state.current_album);
		this.setState({
			"current_song":`0${index}. ${song.name}`,
			"src": song.src,
			"current_album_playing":current_album[0].name,
			current_src: [this.state.playlist[--index]]
		});
	}

	render() {
		let rearrangedPlayer = [
			{
				className: "tier-top",
				style: {
					margin: "1.3rem",
					display:"flex",
					alignItems: "center",
					justifyContent: "space-evenly",
				},
				innerComponents: [
					{
						type: "rewind",
						style: {width: "fit-content"}
					},
					{
						type: "play",
						style: {width: "fit-content",height: "2rem !important"}
					},
					{
						type: "forward",
						style: {width: "fit-content"}
					}
				]
			},
			{
				className: "tier-bottom",
				style: { margin: "0rem 0.3rem 0.3rem 0.3rem",width:"480px" },
				innerComponents: [
					{
						type: "seek",
					}
				]
			}
		]

		return (
			<div id="lower_Block">
				<div className="lower_Block_left">
					<img src={cd} className="cd_image" alt="boy"/>
					<div className="lower_Block_left_lower">
						<span className="lower_Block_left_lower_label">Discography</span>
						{
							albums.map(
								(album,index) => {
									return (
										<div className="album_list" key={index}>
											<span className="album_list_name">{album.name}</span>
											<span className="album_list_year">{album.year}</span>
											<span className="album_list_listen" onClick={event => { this.seleted_album(album)}}>Listen</span>
											<span className="album_list_buy">BUY</span>
										</div>
									)
								}
							)
						}
					</div>
				</div>
				<div className="lower_Block_right">
					<div className="lower_Block_sectionone">
						<div className="lBl_header_label">Now playing</div>
						<div className="lBl_album_label">{this.state.current_album_playing}</div>
						<div className="lBl_current_song_label">{this.state.current_song}</div>
					</div>
					<div className="lower_Block_sectiontwo">
						<AudioPlayer
						  rearrange={rearrangedPlayer}
							audioFiles={this.state.current_src}
							rewindIcon={rewindGray}
							forwardIcon={forwardGray}
							playIcon={playGray}
							rewindHoverIcon={rewindBlack}
							forwardHoverIcon={forwardBlack}
							playHoverIcon={playBlack}
							pauseIcon = {pauseGray}
							pauseHoverIcon = {pauseBlack}
						/>
					</div>
					<div className="lower_Block_sectionthree">
						<div className="lBl_album_label">{this.state.album}</div>
						{
							this.state.songs.map((song,index) => {
								return(
									<div key={index} className={classnames("songs_list", 	{"active": song.src === this.state.src})} onClick={() =>this.current_song(index, song, albums)}>
										<img className="current_song" src={song.src === this.state.src ? arrowBlack : arrowGray} alt="current_song" />
										<div className="lBl_song_label"  key={index}>
											{`0${++index+". "}${song.name}`}
										<span className="song_time">{`......................${song.time}`}</span>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default SectionTwo;