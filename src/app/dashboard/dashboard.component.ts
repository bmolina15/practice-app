import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService, 
  private http:HttpClient) { }

  ngOnInit() {
  }

  

}
