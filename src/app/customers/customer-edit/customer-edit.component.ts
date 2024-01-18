import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  editForm!: FormGroup;
  customerId!: number;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Aqui você deve pegar o ID do cliente da rota e buscar as informações do cliente para preencher o formulário
    this.customerId = +this.route.snapshot.params['id']; // O '+' converte a string para número
    this.initializeForm();
  }

  initializeForm(): void {
    // Inicializa o seu formulário aqui
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Adicione outros campos do formulário conforme necessário
    });

    // Se você precisar carregar os dados do cliente para editar, faça isso aqui e então atualize os valores do formulário
    this.customerService.getCustomerById(this.customerId).subscribe((customer) => {
      console.log(customer);

      this.editForm.patchValue({
        name: customer.name,
        email: customer.email,
        // Defina os valores de outros campos, se houver
      });
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.customerService.updateCustomer(this.customerId, this.editForm.value)
        .subscribe({
          next: (updatedCustomer) => {
            this.editForm.reset(); // Limpa o formulário
            this.router.navigate(['/customers']); // Redireciona para a lista de clientes
          },
          error: (e) => {
            // Tratar erros de requisição aqui
          }
        });
    }
  }

}
