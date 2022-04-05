import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApidataComponent } from './apidata.component';

const routes: Routes = [{ path: '', component: ApidataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApidataRoutingModule { }
