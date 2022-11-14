import { Component, OnInit } from '@angular/core';
import { ModulesService } from 'src/app/services/modules.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Module } from 'src/app/entities/Module';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.less']
})
export class ModulesComponent implements OnInit {
  modules:Module[] = [];
  searchText:any;
  constructor(private service:ModulesService, private _router: Router) {}

  ngOnInit() {
    this.service.getModules()
      .subscribe(response => {
        this.modules = response;
      });
  }
  
  selectedModule?: number;
  onSelect(module: number): void {
    this.selectedModule = module;
    var url = "/module/" + module
    this._router.navigateByUrl(url)
    console.log(this.selectedModule)
  }
}
