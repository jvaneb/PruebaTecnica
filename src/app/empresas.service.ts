import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  array: any[] = [];

  constructor(public http: HttpClient) { }

  getEntityInfo(entityId: Number){
    const url = 'https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/';

    return this.http.get(url + entityId).pipe(map((data: any) => data));
  }
}
