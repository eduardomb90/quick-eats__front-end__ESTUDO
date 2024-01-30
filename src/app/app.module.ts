import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerItemComponent } from './customers/customer-item/customer-item.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerItemComponent,
    CustomerListComponent,
    NavbarComponent,
    FooterComponent,
    CustomerEditComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
