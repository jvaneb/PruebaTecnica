import { Component, OnDestroy, OnInit  } from '@angular/core';
import { EmpresasService } from './empresas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy {

  arrayEntities : any[] = [];  
  arrayEntitiesChecked : any[] = [];
  arrayNewEntities : any[] = [];

  dtOptions: DataTables.Settings = {};

  constructor(public entityService: EmpresasService){}

  ngOnInit() : void {    

    this.dtOptions = {
      pagingType: 'full_numbers'
    };  

    for (let i = 1; i <= 10; i++) {
      this.entityService.getEntityInfo(i).subscribe( (response: any) => {
        this.arrayEntities.push(response.data);   
        // this.dtTrigger.next; 
      });    
    } 
     
    
  }


  ngOnDestroy(): void {
    
  }  

  checkEntity(e : any){
    if (e.target.checked) {
      this.arrayEntitiesChecked.push(e.target.id);
    } else {
      let index = this.arrayEntitiesChecked.indexOf(e.target.id);
      this.arrayEntitiesChecked.splice(index,1);
    }
  }

  showNewEntities() {
    this.arrayNewEntities = [];

    this.arrayEntitiesChecked.forEach(entityId => {
      this.arrayNewEntities.push(this.arrayEntities.find((data:any) => data.entityId == entityId));
    });
  }

  deleteEntity(entityId: number){
    let index = this.arrayNewEntities.indexOf(entityId);
    this.arrayNewEntities.splice(index,1);
  }

  
}
