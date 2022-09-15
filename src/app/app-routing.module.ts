import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:'company',
   component:CompanyComponent},

   {path:'person',
   component:PersonComponent,
    outlet:'personlist'},

  //   {path:'',
  // redirectTo:'/company',
  // pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
