import simmba_01 from './songs/Aankha Marey.mp3';
import simmba_02 from './songs/Tere Bin.mp3';
import simmba_03 from './songs/Mera Wala Dance.mp3';
import simmba_04 from './songs/Bandeya Re Bandeya.mp3';
import simmba_05 from './songs/Aala Re Aala.mp3';
import badhaai_ho_01 from './songs/Badhaaiyan tenu.mp3';
import badhaai_ho_02 from './songs/Morni banke.mp3';
import badhaai_ho_03 from './songs/Nain na jodeen.mp3';
import badhaai_ho_04 from './songs/Sajan bade senti.mp3';
import luka_chuppi_01 from './songs/Coca Cola.mp3';
import luka_chuppi_02 from './songs/Duniyaa.mp3';
import luka_chuppi_03 from './songs/Photo.mp3';
import luka_chuppi_04 from './songs/Poster Lagwa Do.mp3';

const albums = [
  {
    "name":"Simmba",
    "year":2019,
    "songs":[
      {
        "name": "Aankha Marey",
        "src": simmba_01,
        "time":"3:33"
      },
      {
        "name": "Tere Bin",
        "src": simmba_02,
        "time":"3:51"
      },
      {
        "name": "Mera Wala Dance",
        "src": simmba_03,
        "time":"3:20"
      },
      {
        "name": "Bandeya Re Bandeya",
        "src": simmba_04,
        "time":"4:15"
      },
      {
        "name":"Aala Re Aala",
        "src": simmba_05,
        "time":"3:20"
      },
    ]
  },
  {
    "name":"Badhaai Ho",
    "year":2018,
    "songs":[
      {
        "name": "Badhaaiyan tenu",
        "src": badhaai_ho_01,
        "time":"2:20"
      },
      {
        "name": "Morni banke",
        "src": badhaai_ho_02,
        "time":"3:18"
      },
      {
        "name": "Nain na jodeen",
        "src": badhaai_ho_03,
        "time":"4:34"
      },
      {
        "name": "Sajan bade senti",
        "src": badhaai_ho_04,
        "time":"2:32"
      }
    ]
  },
  {
    "name":"Luka Chuppi",
    "year":2019,
    "songs":[
      {
        "name": "Coca Cola",
        "src": luka_chuppi_01,
        "time":"2:59"
      },
      {
        "name": "Duniyaa",
        "src": luka_chuppi_02,
        "time":"3:43"
      },
      {
        "name": "Photo",
        "src": luka_chuppi_03,
        "time":"2:57"
      },
      {
        "name": "Poster Lagwa Do",
        "src": luka_chuppi_04,
        "time":"2:59"
      }
    ]
  },
];

export default albums;
