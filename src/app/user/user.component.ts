import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  newUser: any = {}
  model: users= new users("","","","","","")
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  rue = new FormControl('');
  codepostal = new FormControl('');
  ville = new FormControl('');
  users: any = [];

  constructor() {};

  validate() {
    this.newUser = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      rue: this.rue.value,
      codepostal: this.codepostal.value,
      ville: this.ville.value
    }
    this.users.push(this.newUser)
    console.log(this.users);
  }

}
export class users {
  constructor(
  public username: string,
  public email: string,
  public password: string,
  public rue: string,
  public codepostal: string,
  public ville: string
  ) {}

}
