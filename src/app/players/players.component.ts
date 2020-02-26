import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: [ './players.component.scss' ]
})
export class PlayersComponent implements OnInit {

  name: string;
  character: string;
  region: string;

  players: any;

  constructor() { }

  ngOnInit() {
    this.fetchPlayers();
  }

  fetchPlayers() {
    console.log('hahahahah, im here');
    this.players = JSON.parse(localStorage.getItem('players'));
    // let playersResults = document.getElementById('playersResults');

    console.log(this.players);

    // Building output
    // playersResults.innerHTML = '';

    // for (let i = 0; i < players.length; i++) {
    //   this.name = players[ i ].name;
    //   this.character = players[ i ].character;
    //   this.region = players[ i ].region;
    // }
  }

}
