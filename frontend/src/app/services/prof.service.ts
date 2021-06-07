import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/prof/';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http: HttpClient) { }

  getProfs(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  addProf(data:Object): Observable<any> {
    return this.http.post(API_URL + 'add',data,{ responseType: 'text' });
  }

  updateProf(data:Object): Observable<any> {
    return this.http.put(API_URL + 'update',data,{ responseType: 'text' });
  }

  deleteProf(id:Number): Observable<any> {
    return this.http.delete(API_URL+id,{ responseType: 'text' });
  }
  
}
