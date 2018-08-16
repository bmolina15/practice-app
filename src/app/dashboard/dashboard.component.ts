import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import {HttpClient} from '@angular/common/http';
import {SearchbarComponent} from '../searchbar/searchbar.component'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datohijo=String();

  @Output() datoAfilm= new EventEmitter();

  constructor(private apiService: ApiService, 
  private http:HttpClient) { }

  ngOnInit() {
    
  }

  showText(inpValue){
    console.log("received",inpValue)
    this.datohijo=inpValue;
  }

  

}
