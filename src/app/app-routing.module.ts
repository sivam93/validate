import { NgModule } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { ValidateComponent } from './validate/validate.component';



const routes: Routes = [
{ path: 'Validate', component: ValidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
