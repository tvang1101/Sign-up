import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

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
}
