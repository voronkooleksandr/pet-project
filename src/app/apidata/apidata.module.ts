import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApidataRoutingModule } from './apidata-routing.module';
import { ApidataComponent } from './apidata.component';


@NgModule({
  declarations: [
    ApidataComponent
  ],
  imports: [
    CommonModule,
    ApidataRoutingModule
  ]
})
export class ApidataModule { }
