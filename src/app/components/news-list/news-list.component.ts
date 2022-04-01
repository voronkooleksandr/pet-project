import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { News } from 'src/app/models/news';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList: Array<News> = [];

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getNews().subscribe(
      data => {
        this.newsList = data;
        console.log(this.newsList)
      }, error => {
        console.log(error)
      }
    )
  }


}
