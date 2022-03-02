import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'section2',
  template: `<div [formGroup]="formGroup">
    <h1>This is section2</h1>
    <input formControlName="age" />
  </div>`,
})
export class Section2Component {
  @Input() formGroup: FormGroup;

  ngOnInit() {
    this.formGroup.addControl('age', new FormControl());
  }
}
