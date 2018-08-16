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

  films: Array<any>;
  filteredFilms: Array<any>;

  isSearching: boolean = false;

  ngOnInit() {
    this.films = [];
    this.filteredFilms = [];

    this.getFilms();

  }

  showText(event) {
    this.isSearching = true;
    this.filteredFilms = this.films.filter(film => film.title.toLowerCase().includes(event.toLowerCase()));
  }

  getFilms() {
    this.apiService.getAllFilms().subscribe(res => 
      // console.log(res)
      res.map((f)=> {
        this.films.push(f);
      //this.filteredFilms.push(f);
      })
    );
  }

}
