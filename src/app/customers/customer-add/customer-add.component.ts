import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  addForm!: FormGroup;
  customer: Customer;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customer = {
      id: 0,
      name: '',
      email: '',
      password: '',
      address: {
        street: '',
        city: '',
        state: '',
        cep: ''
      }
    };

    this.initializeForm();
  }

  initializeForm(): void {
    // Inicializa o seu formulário aqui
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      street: ['', [Validators.required, Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.maxLength(50)]],
      cep: ['', [Validators.required, Validators.pattern('\\d{8}')]]
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.customerService.addCustomer(this.addForm.value).subscribe(result => {
        console.log('Customer added', result);
        // Redirecionar ou atualizar a lista
        this.router.navigate(['/customers']);
      });
    }
  }
}
