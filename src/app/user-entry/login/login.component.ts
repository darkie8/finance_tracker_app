import { Component, OnInit } from '@angular/core';
import { FinancialTrackerService } from 'src/app/financial-tracker.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(public httpService: FinancialTrackerService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
  }

  private setcookies: any = (token, name) => {

    const date = new Date();
    const days = -1;
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    // saving authtoken, userid cookies
    Cookie.set('authToken', token, date['toGMTString']());
    Cookie.set('receiverId', name, date['toGMTString']());
  }

  /**
   * getLogindata
   */
  public getLogindata (): any {
    if (!this.userName) {
      this.messageService.add({
        key: 'un',
        severity: 'warn',
        summary: 'userName missing',
        detail: 'input userName'
      });

    } else if (!this.password) {
      this.messageService.add({
        key: 'pass',
        severity: 'warn',
        summary: 'password missing',
        detail: 'input password'
      });
    } else {
      const body = {

        'username': this.userName,

        'password': this.password

      };
      this.httpService.login(body).subscribe(
        response => {
          const details = response;
          console.log(details);
          const token = details['token'];
          const adminName = details['adminName'];
          this.setcookies(token, adminName);
          this.messageService.add({
            key: 'login',
            severity: 'info',
            summary: 'Login Done !!',
            detail: 'Soon, you will be directed to dashboard.'
          });
          setTimeout(() => {
            this.router.navigate([`/dashboard/${adminName}`]);
          }, 1500);
        },
        err => {
          this.messageService.add({
            key: 'loginerr',
            severity: 'error',
            summary: 'Login Failed !!',
            detail: 'Check username & password !!.'
          });
        }
      );
    }
  }

}
