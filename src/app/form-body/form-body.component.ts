import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'form-body',
  templateUrl: './form-body.component.html',
  styleUrls: [ './form-body.component.scss' ]
})
export class FormBodyComponent implements OnInit {

  sfForm: FormGroup;
  constructor(private fb: FormBuilder, private playersService: PlayersService) { }

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
    this.playersService.save(this.sfForm.value);

    // Clears form
    this.sfForm.reset();
  }
}
