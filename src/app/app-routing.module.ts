import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {PeopleComponent} from './people/people.component'

const routes: Routes = [
  {path:'films',component:FilmsComponent},
  {path:'people',component:PeopleComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModule { }
