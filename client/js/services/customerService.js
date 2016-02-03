import { Rest } from 'grommet';

export default class CustomerService {
  constructor() {
    this.baseUrl = 'api/customer';
  }

  getCustomer() {
    return Rest.get(this.baseUrl);
  }

  //updateCustomer...
}
