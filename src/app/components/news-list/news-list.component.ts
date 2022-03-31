import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList: Array<any> = [{
    "name": "string",
"username": "string",
"email": "string",
"role": "string",
"address": "string",
"phone": "string"
},
{"name": "string",
"username": "string",
"email": "string",
"role": "string",
"address": "string",
"phone": "string"
},
{"name": "string",
"username": "string",
"email": "string",
"role": "string",
"address": "string",
"phone": "string"
},
{"name": "string",
"username": "string",
"email": "string",
"role": "string",
"address": "string",
"phone": "string"
},


]

  constructor() { }

  ngOnInit(): void {
  }

}
