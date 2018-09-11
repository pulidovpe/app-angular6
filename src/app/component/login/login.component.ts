import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from  '@angular/material';
import { ErrorComponent } from '../../error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private  dialog:  MatDialog, private  router:  Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["user"]);
    } else {
      this.dialog.open(ErrorComponent,{ data: {
        message:  "Your login information are incorrect!"
      }});
    }
  }

}
