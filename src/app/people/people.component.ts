import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:Array<any>;
  filteredPeople:Array<any>;
  isSearching: boolean = false;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.people=[];
    this.filteredPeople=[];
    this.getPeople();
  }

  searchedPeople(event){
    this.isSearching=true;
    this.filteredPeople=this.people.filter(people=>people.name.toLowerCase().includes(event.toLowerCase()));
  }

  getPeople(){
    this.apiService.getAllPeople().subscribe(res =>
      res.map((p)=> {
      this.people.push(p);
    })
  );
  }

}
