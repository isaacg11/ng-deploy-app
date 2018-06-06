import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  getTodos() {
    console.log(window.location.origin);
    return this.http.get(`${window.location.origin}/todos`);
  }

  constructor(private http: HttpClient) {

  }
}
