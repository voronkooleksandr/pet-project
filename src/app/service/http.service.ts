import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { News } from 'src/app/models/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlNews: string = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=c27589af639e48b99d58747c11cd2445";
  newsList: News[] = [];

  constructor(private http: HttpClient) { }

  getNews(): Observable <News[]>{
    return this.http.get(this.urlNews).pipe(
      map((data: any) => {
        let newsList = data.articles;
        console.log(this.newsList)
        return newsList.map(function (news: any): News {
          return new News (
            news.author,
            news.description,
            news.url,
            news.urlToImage
          );
        });
      })
    );
  }

  getNewsDetail (author: string) {
    return this.http.get(`${this.urlNews}/${author}`);
  }

}



// .pipe(
//   map((data: any) => {
//     const newsListArray: Array<News> = [];
//     for (const id in data) {
//       if (data.hasOwnProperty(id)) {
//         newsListArray.push(data[id]);
//       }

//     }
//     return newsListArray;
//   })
// )
// }
