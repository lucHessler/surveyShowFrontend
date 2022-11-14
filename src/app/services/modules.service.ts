import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from '../entities/Module';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  private url = 'http://localhost:4000/modules';
   
  constructor(private httpClient: HttpClient) { }
  
  getModules(){
    return this.httpClient.get<Module[]>(this.url);
  }
}
