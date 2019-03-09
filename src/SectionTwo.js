import React, {Component} from 'react';
import cd from '../src/images/cd.png';

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
			"songs":current_album[0].songs
		});
	}

	current_song(event){
		this.setState({
			"current_song":event.target.innerText,
		});
	}

	render() {
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
						<div className="lBl_header_label">PLAYER</div>
					</div>
					<div className="lower_Block_sectionthree">
						<div className="lBl_album_label">{this.state.album}</div>
						{this.state.songs.map((song,index) => {
							return<div className="lBl_song_label" onClick={event => { this.current_song(event)}} key={index}>{index+1+". "+song}</div>
						})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default SectionTwo;