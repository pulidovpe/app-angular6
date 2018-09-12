import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material';
import { ErrorComponent } from '../../error.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private  dialog:  MatDialog) { }

  ngOnInit() {
  }

  submit() {
    this.dialog.open(ErrorComponent,{ data: {
      title: 'Angular Form Message',
      message:  "This form is not available!"
    }});
  }

}
