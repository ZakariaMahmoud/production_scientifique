import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/publication/';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  getPublications(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  addPublication(data:Object): Observable<any> {
    return this.http.post(API_URL + 'add',data,{ responseType: 'text' });
  }

  updatePublication(id:Number,data:Object): Observable<any> {
    return this.http.put(API_URL + 'update/'+id,data,{ responseType: 'text' });
  }

  deletePublication(id:Number): Observable<any> {
    return this.http.delete(API_URL + id,{ responseType: 'text' });
  }


}
