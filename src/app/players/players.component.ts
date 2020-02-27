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
    this.players = JSON.parse(localStorage.getItem('players'));
  }

}
