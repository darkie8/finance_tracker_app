import { Component, OnInit, ViewChild } from '@angular/core';
import { FinancialTrackerService } from 'src/app/financial-tracker.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { MessageService, MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/components/tree/tree';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  i: any;
  index = 0;
  userInfoValues: any;
  userInfoKeys: any;
  object: any;
  userInfo: any;
  userProfile: any;
  userProfileValues: {}[];
  userProfileKeys: string[];
  constructor(private httpService: FinancialTrackerService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {

    if (!Cookie.get('authToken')) {
      this.router.navigate([`/login`]);
    }
    this.httpService.getdashboardInfo(Cookie.get('authToken')).subscribe(
      response => {
        console.log(response);
        const userInfo = response['userInfo'];
        this.userInfo = userInfo;
        this.userInfoKeys = Object.keys(userInfo);
        this.userInfoValues = Object.values(userInfo);
        this.userProfile = userInfo.userProfile;
        this.userProfileValues = Object.values(this.userProfile);
        this.userProfileKeys = Object.keys(this.userProfile);
      },
      err => { }
    );
  }
  openNext() {
    this.index = (this.index === this.userInfoKeys.length - 1) ? 0 : this.index + 1;
    this.i = this.index;
  }

  openPrev() {
    this.index = (this.index === 0) ? this.userInfoKeys.length - 1 : this.index - 1;
    this.i = this.index;
  }
  onOpen(e) {
    this.i = e.index;
    console.log(this.i);

  }
  /**
   * logout
   */
  public logout() {
    Cookie.delete('authToken');
    Cookie.delete('receiverId');
    this.messageService.add({
      key: 'logout',
      severity: 'info',
      summary: 'Logout Done !!',
      detail: 'Soon, you will be directed to login page.'
    });
    setTimeout(() => {
      this.router.navigate([`/login`]);
    }, 1000);
  }
}
