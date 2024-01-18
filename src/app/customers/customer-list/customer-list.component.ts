import { Component, OnInit } from '@angular/core';
import { PaginatedResponse } from 'src/app/interfaces/paginated-response.interface';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  page: number = 1;
  pageSize: number = 5;
  totalCustomers: number = 0;

  mockList: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers(this.page - 1, this.pageSize)
    .subscribe((response: PaginatedResponse<Customer>)  => {
      console.log(response );
      this.customers = response.content;
      this.totalCustomers = response.totalElements;
    });
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadCustomers();
  }
}
