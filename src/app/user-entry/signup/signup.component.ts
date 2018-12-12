import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {

  userName: string;
  email: string;
  password: string;
  constructor(private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  /**
   * signUp
   */
  public signUp() {
    if (!this.userName) {
      this.messageService.add({
        key: 'un',
        severity: 'warn',
        summary: 'userName missing',
        detail: 'input userName'
      });

    } else if (!this.email) {
      this.messageService.add({
        key: 'em',
        severity: 'warn',
        summary: 'email missing',
        detail: 'input email'
      });
    }  else if (!this.password) {
      this.messageService.add({
        key: 'pass',
        severity: 'warn',
        summary: 'password missing',
        detail: 'input password'
      });
    } else {
      this.messageService.add({
      key: 'signUp',
      severity: 'info',
      summary: 'SignUp Done !!',
      detail: 'Soon, you will be directed to Login.'
    });
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
  }
}
