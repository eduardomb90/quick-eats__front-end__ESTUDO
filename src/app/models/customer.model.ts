export interface Customer {
  id: number;
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    cep: string;
  };
}
