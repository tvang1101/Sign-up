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
    this.setupForm();
  }

  setupForm() {
    this.sfForm = this.fb.group({
      alias: '',
      character: '',
      region: '',
      signature: ''
    });
  }

  savePlayer() {
    let player = [];
    player.push(this.sfForm.value);

    if (localStorage.getItem('players') === null) {
      let players = [];
      players.push(player);

      // Re-set back to localStorage
      localStorage.setItem('players', JSON.stringify(players));
    } else {
      let players = JSON.parse(localStorage.getItem('players'));
      players.push(player);

      // Re-set back to localStorage
      localStorage.setItem('players', JSON.stringify(players));
    }

    // Clears form
    this.sfForm.reset();
  }
}
