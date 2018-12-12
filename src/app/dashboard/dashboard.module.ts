import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TreeModule} from 'primeng/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import { CamelcaseBreakerPipe } from '../share/camelcase-breaker.pipe';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [DashboardComponent, CamelcaseBreakerPipe],
  imports: [
    CommonModule,
    TreeModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    AccordionModule,
    ButtonModule,
    FieldsetModule
  ]
})
export class DashboardModule { }
