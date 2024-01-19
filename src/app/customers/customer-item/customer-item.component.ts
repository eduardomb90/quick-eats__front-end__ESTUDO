import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer!: Customer; // Recebe o objeto Customer como input

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onDelete(customerId: number) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.customerService.deleteCustomer(customerId).subscribe(() => {
        // Atualize a lista de clientes ou redirecione conforme necessário
      });
    }
  }
}
