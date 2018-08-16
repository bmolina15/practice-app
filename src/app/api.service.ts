import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  retFilms:Array<any>;

  constructor(private http:HttpClient) { }

  getAllFilms(){
    return this.http.get<any>(`https://ghibliapi.herokuapp.com/films`);
  }

  setFilms(){
    if(this.retFilms==null){
      this.retFilms=[this.getAllFilms()];
    }
    return this.retFilms;

  }

  getAllPeople(){
    return this.http.get<any>(`https://ghibliapi.herokuapp.com/people`);
  }
}
