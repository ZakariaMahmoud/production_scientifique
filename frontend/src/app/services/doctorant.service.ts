import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8080/api/doctorant/';

@Injectable({
  providedIn: 'root'
})
export class DoctorantService {

  constructor(private http: HttpClient) { }


  getDoctorant(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  // getAuthorByPublicationId(pubId:Number): Observable<any> {
  //   return this.http.get(API_URL +pubId , { responseType: 'text' });
  // }

  addDoctorant(data:Object): Observable<any> {
    return this.http.post(API_URL + 'add/'  ,data,{ responseType: 'text' });
  }

  updateDoctorant(data:Object): Observable<any> {
    return this.http.put(API_URL + 'update',data,{ responseType: 'text' });
  }

  deleteDoctorant(id:Number): Observable<any> {
    return this.http.delete(API_URL+id,{ responseType: 'text' });
  }
}
