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
import AudioPlayer from 'react-modular-audio-player';

class SectionTwo extends Component {

	albums = [
		{
			"name":"Simmba",
			"year":2019,
			"songs":[
				"Aankha Marey",
				"Tere Bin",
				"Mera Wala Dance",
				"Bandeya Re Bandeya",
				"Aala Re Aala"
			]
		},
		{
			"name":"Badhaai Ho",
			"year":2018,
			"songs":[
				"Badhaaiyan tenu",
				"Morni banke",
				"Nain na jodeen",
				"Sajan bade senti"
			],
		},
		{
			"name":"Heroes Of The Sun",
			"year":2013,
			"songs":[
				"Morni banke",
				"Nain na jodeen",
			 ]
		},
		{
			"name":"Picure Of The Past",
			"year":2012,
			"songs":[
				"Sajan bade senti"
			]
		}
	];


	state = {
		"album":"Simmba",
		"songs":[
			"Aankha Marey",
			"Tere Bin",
			"Mera Wala Dance",
			"Bandeya Re Bandeya",
			"Aala Re Aala"
		],
		"current_song":"Play your favourite song"

	}

	seleted_album(event,album_name){
		var current_album = this.albums.filter(album => {
			return album.name === album_name
		});
		this.setState({
			"album":current_album[0].name,
			"songs":current_album[0].songs,
			"current_song":"Play your favourite song"
		});
	}

	current_song(event,cur_song){
		this.setState({
			"current_song":cur_song.index+1+". "+cur_song.song,
		});
	}

	render() {
		let playlist = [
			{ src: "http://media.djmazadownload.xyz/music/Singles/Aankh%20Marey%20%28Simmba%29%20-190Kbps%20%5BDJMaza.US%5D.mp3",
				title: "Song",
				artist: "Singer" }
		];

		let rearrangedPlayer = [
			{
				className: "tier-top",
				style: {margin: "1.3rem",display:"flex",
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
				style: {margin: "0rem 0.3rem 0.3rem 0.3rem",width:"480px"},
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
						{this.albums.map(
							(album,index) => {
							return (
								<div className="album_list" key={index}>
									<span className="album_list_name">{album.name}</span>
									<span className="album_list_year">{album.year}</span>
									<span className="album_list_listen" onClick={event => { this.seleted_album(event,album.name)}}>Listen</span>
									<span className="album_list_buy">BUY</span>
								</div>
							)
							}
						)}
					</div>
				</div>
				<div className="lower_Block_right">
					<div className="lower_Block_sectionone">
						<div className="lBl_header_label">Now playing</div>
						<div className="lBl_album_label">{this.state.album}</div>
						<div className="lBl_current_song_label">{this.state.current_song}</div>
					</div>
					<div className="lower_Block_sectiontwo">
						<AudioPlayer className="slider"
						  rearrange={rearrangedPlayer}
							audioFiles={playlist}
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
						{this.state.songs.map((song,index) => {
							return(
								<div className="songs_list">
								<img className="current_song" src={arrowGray} alt="current_song"/>
									<div className="lBl_song_label" onClick={event => { this.current_song(event,{index,song})}} key={index}>
										{index+1+". "+song}
									<span className="song_time">{`......................2:30`}</span>
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