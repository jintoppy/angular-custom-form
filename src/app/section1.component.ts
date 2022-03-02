import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'section1',
  template: `<div [formGroup]="formGroup">
    <h1>This is section1</h1>
    <input formControlName="name"  />
  </div>`,
})
export class Section1Component {
  @Input() formGroup: FormGroup;

  ngOnInit() {
    this.formGroup.addControl('name', new FormControl());
  }
}
