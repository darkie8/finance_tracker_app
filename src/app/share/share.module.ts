import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelcaseBreakerPipe } from './camelcase-breaker.pipe';

@NgModule({
  declarations: [CamelcaseBreakerPipe],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
