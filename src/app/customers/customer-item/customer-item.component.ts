import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {
  @Input() customer!: Customer; // Recebe o objeto Customer como input

  constructor() { }

  ngOnInit(): void {
  }
}
