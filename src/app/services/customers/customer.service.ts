import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from 'src/app/interfaces/paginated-response.interface';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers';


  constructor(private http: HttpClient) { }

  getCustomers(page: number = 0, pageSize: number = 10): Observable<PaginatedResponse<Customer>> {
    return this.http
      .get<PaginatedResponse<Customer>>(`${this.apiUrl}?page=${page}&size=${pageSize}`);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
