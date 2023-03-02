import { Component } from '@angular/core';
import { DepartmentsService } from '../common/services/departments.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  public departements = this.departementsService.departements;
  public selectedDepartment:string = "";

  constructor(public departementsService:DepartmentsService){}
}
