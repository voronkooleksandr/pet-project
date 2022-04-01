import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  subs = new Subscription();
  newsDetail: any | [];

  constructor( private httpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const author = this.route.snapshot.paramMap.get('author')!;
    this.httpService.getNewsDetail('author').subscribe((data) => {
      this.newsDetail = data;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
