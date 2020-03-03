import { Component, OnInit } from '@angular/core';
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
    // Subscribe to behavior subject
    this.playServe$ = this.playersService.player.subscribe(data => this.players = data);
  }

  /**
   * On initilization
   */
  ngOnInit() {
    this.fetchPlayers();
  }

  /**
   * On destroy
   */
  ngOnDestroy() {
    this.playServe$.unsubscribe();
  }

  /**
   * Fetch players
   */
  fetchPlayers() {
    this.playServe$;
  }

}
