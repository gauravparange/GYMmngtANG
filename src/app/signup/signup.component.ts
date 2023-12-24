import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
first_name: string = "";
last_name: string = "";
email: any;
password: string = "";
gender:   string = "";
birth_date:  any ;
address: string = "";
onSubmit() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
