import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {



    @Input()
  newsCard!: News;

  constructor(private router: Router) {}

  ngOnInit() {

  }

  onClickNewsr( author: string) {
    this.router.navigate(['/features', `${author}`]);
  }



}
