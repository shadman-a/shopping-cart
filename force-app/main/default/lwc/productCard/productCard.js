import { LightningElement, track } from 'lwc';
import getProducts from '@salesforce/apex/ProductService.getProducts';
import addToCart from '@salesforce/apex/ProductService.addToCart';


export default class ProductCard extends LightningElement {
  @track listOfProducts;
  connectedCallback() {
    getProducts()
      .then((result) => {
        console.log(result);
        this.listOfProducts = result;
        this.error = undefined;
        const isAddedToCart = false
        const quantity = 1
      })

      .catch((error) => {
        this.error = error;
        this.listOfProducts = undefined;
      });

  }

  handleAddToCart(){
    console.log("hello")
    
  }


}