import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserEntryRoutingModule } from './user-entry-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PasswordModule,
    FormsModule,
    UserEntryRoutingModule,
    FieldsetModule,
    ToastModule
  ]
})
export class UserEntryModule { }
