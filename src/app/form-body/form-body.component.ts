import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
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
      alias: [ '', [
        Validators.required,
      ] ],
      character: [ '', [
        Validators.required,
      ] ],
      region: [ '', [
        Validators.required,
      ] ],
      agree: [ false, [
        Validators.required,
      ] ],
      signature: [ '', [
        Validators.required,
      ] ]
    });
  }

  get alias() {
    return this.sfForm.get('alias');
  }

  get character() {
    return this.sfForm.get('character');
  }

  get region() {
    return this.sfForm.get('region');
  }

  get signature() {
    return this.sfForm.get('signature');
  }

  savePlayer() {
    this.playersService.save(this.sfForm.value);

    // Clears form
    this.sfForm.reset();
  }
}
