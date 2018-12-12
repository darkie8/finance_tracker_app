import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TreeModule} from 'primeng/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TreeModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    AccordionModule,
    ButtonModule
  ]
})
export class DashboardModule { }
