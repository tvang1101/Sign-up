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
  playServe$: any;

  constructor(private playersService: PlayersService) {
    this.playServe$ = this.playersService.player.subscribe(data => this.players = data);
  }

  ngOnInit() {
    this.fetchPlayers();
  }

  ngOnDestroy() {
    this.playServe$.unsubscribe();
  }

  fetchPlayers() {
    this.playServe$;
  }

}
