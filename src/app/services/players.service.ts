import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  play: any;
  player = new BehaviorSubject([]);

  constructor() {
    this.fetchMe();
  }

  // Save players to local storage
  save(value) {
    if (localStorage.getItem('players') === null) {
      let players = [];
      players.push(value);

      // Re-set back to localStorage
      localStorage.setItem('players', JSON.stringify(players));
    } else {
      let players = JSON.parse(localStorage.getItem('players'));
      players.push(value);

      // Re-set back to localStorage
      localStorage.setItem('players', JSON.stringify(players));
    }
  }

  fetchMe() {
    const play = JSON.parse(localStorage.getItem('players'));
    this.player.next(play);
  }
}
