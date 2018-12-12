import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'finance-tracker-application';
  constructor(private router: Router) { }

  ngOnInit() {

    if (Cookie.get('authToken')) {
      this.router.navigate([`/dashboard/${Cookie.get('receiverId')}`]);
    }
  }
}
