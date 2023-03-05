import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { City } from '../common/data/city';
import { DataGouvService } from '../common/services/data-gouv.service';
import { DepartmentsService } from '../common/services/departments.service';
import { sortBySmall } from '../common/utils/utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  public departements = this.departementsService.departements;
  public selectedDepartment:string | null = null;
  public cityList:string[] = [];

  public async onSelectDepartment(){
    if(this.selectedDepartment)
    {
      let result = await firstValueFrom(this._dataGouvServe.getCityList$(this.selectedDepartment));
      this.sortResultToCityList(result);
    }
  }

  public sortResultToCityList(result:any){
      this.cityList = [];   
      for(let value of result.facet_groups[3].facets){
        this.cityList.push(this.checkFirstLetterWithAccent(value.name));
      }
      sortBySmall(this.cityList);  
  }

  public checkFirstLetterWithAccent(word:string){
    if(word.charAt(0) == "É"){
      return word = "E" + word.slice(1);
   }
   return word;
  }

  constructor(public departementsService:DepartmentsService, private _dataGouvServe:DataGouvService){}
}
