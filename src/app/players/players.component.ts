import { Component, OnInit, OnChanges } from '@angular/core';
import { PlayersService } from '../services/players.service';

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

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.fetchPlayers();
  }

  ngOnDestroy() {
    this.playersService.player.unsubscribe();
  }

  fetchPlayers() {
    this.playersService.player.subscribe(data => this.players = data);
  }

}
