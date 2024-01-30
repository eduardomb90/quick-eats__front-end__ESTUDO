import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customers/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer!: Customer; // Recebe o objeto Customer como input
  @Output() customerDeleted = new EventEmitter();

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onDelete(customerId: number) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.customerService.deleteCustomer(customerId).subscribe({
        next: () => {
          this.toastr.success('Cliente excluído com sucesso!');
          this.customerDeleted.emit();
        },
        error: () => {
          this.toastr.error('Ocorreu um erro ao excluir o cliente.');
        }
      });
    }
  }
}
