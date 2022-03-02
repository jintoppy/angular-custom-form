import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  section1FormGroup = new FormGroup({
    name: new FormControl(),
  });
  section2FormGroup = new FormGroup({
    age: new FormControl(),
  });
  userForm = new FormGroup({
    title: new FormControl(),
    section1: this.section1FormGroup,
    section2: this.section2FormGroup,
  });
}
