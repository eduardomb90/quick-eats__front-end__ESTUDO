import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  //{ path: 'customers/add', component: CustomerAddComponent },
  { path: 'customers/edit/:id', component: CustomerEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
