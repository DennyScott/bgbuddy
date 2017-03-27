import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import xml2js from 'xml2js';
import { BGTemplate, BGLeftBody, BGRightBody } from '../BGLayout/BGTemplate/BGTemplate';
import GamesWidget from '../Widgets/Game/GamesWidget';


export default class Games extends Component {

  constructor(props) {
      super(props);
      this.state = {
        myGames: []
      }
  }

  componentDidMount() {
    this.getUserGames();
  }

  render() {
    return (
          <BGTemplate className="games" header= "Games">
            <BGLeftBody>
                <GamesWidget games={ this.state.myGames }/>
            </BGLeftBody>

            <BGRightBody>

            </BGRightBody>
          </BGTemplate>
    );
  }

  getUserGames() {
    this.parseData('https://www.boardgamegeek.com/xmlapi2/collection?username=gizmmo&own=1&subtype=boardgame').then(data => {
      this.setState ({
        myGames: this.convertUserGameData(data.items.item)
      });
    });
  }

  convertUserGameData(myGames) {
    return myGames.map((game, i) => (
      {
        key: i,
        name: game.name[0]._,
        comment: game.comment && game.comment[0],
        image: game.image[0],
        numplays: game.numplays[0],
        status: game.status.$,
        thumbnail: game.thumbnail[0],
        yearpublished: game.yearpublished[0]
      }
    ));
  }

  getGames() {
    this.parseData('https://www.boardgamegeek.com/xmlapi2/search?query=Splendor&type=boardgame').then(data => console.log(data));
  }

  parseData(url) {
    return new Promise((resolve, reject) => axios.get(url)
      .then(response => {
        xml2js.parseString(response.data, (err, data) => resolve(data));
      }));
  }
}
