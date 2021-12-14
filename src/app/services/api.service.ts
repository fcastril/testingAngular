import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json');
  }
}
