import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './pages/modules/modules.component' 
import { ModuleComponent } from './pages/module/module.component' 

const routes: Routes = [
  { path: '', redirectTo: '/modules', pathMatch: 'full' },
  { path: 'modules', component: ModulesComponent },
  { path: 'module/:id', component: ModuleComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
