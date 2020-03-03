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

  /**
   * On initilization
   */
  ngOnInit() {
    this.setupForm();
  }

  /**
   * Set up for reactive form
   */
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

  /**
   * Check validation for alias
   */
  get alias() {
    return this.sfForm.get('alias');
  }

  /**
   * Check validation for character
   */
  get character() {
    return this.sfForm.get('character');
  }

  /**
   * Check validation for region
   */
  get region() {
    return this.sfForm.get('region');
  }

  /**
   * Check validation for signature
   */
  get signature() {
    return this.sfForm.get('signature');
  }

  /**
   * Save player to local at service
   */
  savePlayer() {
    this.playersService.save(this.sfForm.value);

    // Clears form
    this.sfForm.reset();
  }
}
