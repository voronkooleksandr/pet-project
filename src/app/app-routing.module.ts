import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsListComponent } from './components/news-list/news-list.component';

const routes: Routes = [
  {path: "", component: NewsListComponent},
  {path: ":features/:author", component: NewsDetailComponent }
  // {path: 'notfound', component: NotfoundComponent},
  // {path: '**', redirectTo: "technews" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
