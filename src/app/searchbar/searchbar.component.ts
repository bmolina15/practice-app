import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

    //@Input() searchedText:any;
    @Output() showT= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchbarfilm(inpValue){
    this.showT.emit(inpValue);
  }
}
