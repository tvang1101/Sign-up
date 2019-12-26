import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'form-body',
  templateUrl: './form-body.component.html',
  styleUrls: [ './form-body.component.scss' ]
})
export class FormBodyComponent implements OnInit {

  sfForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sfForm = this.fb.group({
      name: '',
      character: '',
      region: '',
    });

    this.sfForm.valueChanges.subscribe(console.log);
  }

  // getStorage() {
  //   if (localStorage.getItem('players') === null) {
  //     let players = [];
  //     // players.push(player);

  //     // Re-set back to localStorage
  //     localStorage.setItem('players', JSON.stringify(players));
  //   } else {
  //     let players = JSON.parse(localStorage.getItem('players'));
  //     // players.push(player);

  //     // Re-set back to localStorage
  //     localStorage.setItem('players', JSON.stringify(players));
  //   }
  // }

  // savePlayer() {
  //   console.log('im savgin');
  // let playerSF = document.getElementById('nameInput').value;
  // let characterSF = document.getElementById('characterInput').value;
  // let regionSF = document.getElementById('regionInput').value;

  // if (!validateForm(playerSF, characterSF)) {
  //   return false;
  // }

  // let player = {
  //   name: playerSF,
  //   character: characterSF,
  //   region: regionSF
  // };

  // // Test if player is null
  // if (localStorage.getItem('players') === null) {
  //   let players = [];
  //   players.push(player);

  //   // Re-set back to localStorage
  //   localStorage.setItem('players', JSON.stringify(players));
  // } else {
  //   let players = JSON.parse(localStorage.getItem('players'));
  //   players.push(player);

  //   // Re-set back to localStorage
  //   localStorage.setItem('players', JSON.stringify(players));
  // }

  // document.getElementById('signUpForm').reset();

  // fetchPlayers();

  // e.preventDefault();
  // }
}
