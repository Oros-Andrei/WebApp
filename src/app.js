import { Customer } from "./Customer";
export class App{
  constructor(){
    this.heading='Product review';
    this.customer=[];
    this.customerFirstname='';
    this.customerLastname='';
    this.customerEmail='';
    this.customerPhone='';
    this.customerAdress='';
   
  }
  addCustomer(){
    if(this.customerAdress && this.customerEmail && this.customerFirstname && this.customerLastname &&this.customerPhone){
      this.customer.push(new Customer(this.customerAdress,this.customerEmail,this.customerFirstname,this.customerLastname,this.customerPhone));


      // Eliberare text box
      this.customerFirstname='';
    this.customerLastname='';
    this.customerEmail='';
    this.customerPhone='';
    this.customerAdress='';
    
    }
  }
  removeCustomer(customer)
{let index=this.customer.indexOf(customer);
if(index !==-1)
  {
this.customer.splice(index,1);
  } 
 }
}