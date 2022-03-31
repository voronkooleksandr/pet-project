import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() newsCard : any;
  Property: any = {
    "name": "string",
"username": "string",
"email": "string",
"role": "string",
"address": "string",
"phone": "string",


}

  constructor() { }

  ngOnInit(): void {
  }

}
