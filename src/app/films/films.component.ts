import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  films: any;

  ngOnInit() {

    this.getFilms();

  }

  getFilms() {
    
    this.apiService.getAllFilms().subscribe(res => 
      // console.log(res);
      this.films = res
    );
    
    console.log(this.films);
  }

}
