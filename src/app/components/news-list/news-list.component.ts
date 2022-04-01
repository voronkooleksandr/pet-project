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
  searchItem: string = "";


  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getNews().subscribe(
      data => {
        this.newsList = data;
        console.log(this.newsList)
      }, error => {
        console.log(error)
      }
    );

    this.httpService.search.subscribe((value: string) => {
      this.searchItem = value;
    })
  }

  search(event: any ) {
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.httpService.search.next(this.searchItem);
  }

  clean (event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.httpService.search.next(this.searchItem);
  }


}
