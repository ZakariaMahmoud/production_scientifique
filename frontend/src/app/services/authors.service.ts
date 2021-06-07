import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/author/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }


  getAuthors(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getAuthorByPublicationId(pubId:Number): Observable<any> {
    return this.http.get(API_URL +pubId , { responseType: 'text' });
  }

  addAuthors(pubId:Number,data:Object): Observable<any> {
    return this.http.post(API_URL + 'add/' + pubId ,data,{ responseType: 'text' });
  }

  updateAuthor(data:Object): Observable<any> {
    return this.http.put(API_URL + 'update',data,{ responseType: 'text' });
  }

  deleteAuthor(id:Number): Observable<any> {
    return this.http.delete(API_URL+id,{ responseType: 'text' });
  }
}
