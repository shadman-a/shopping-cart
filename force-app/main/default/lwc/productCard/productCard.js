import { LightningElement, track } from 'lwc';
import getProducts from '@salesforce/apex/ProductService.getProducts';
import addToCart from '@salesforce/apex/ProductService.addToCart';
import createCart from '@salesforce/apex/ProductService.createCart';
import Id from '@salesforce/user/Id';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class ProductCard extends LightningElement {
  @track listOfProducts;
  cartId;
  connectedCallback() {
    getProducts()
      .then((result) => {
        console.log(result);
        this.listOfProducts = result;
        this.error = undefined;
        const isAddedToCart = true
        const quantity = 1
      })
      .catch((error) => {
        this.error = error;
        this.listOfProducts = undefined;
      });

      createCart({ currentUser: Id })
      .then((result) => {
        this.cartId = result
       
      })
      .catch((error) => {
        this.error = error;
      });

    

    
  }

  handleAddToCart(event){
    console.log("product id",event.target.dataset.id)
    console.log("user id",Id)
    addToCart({ product: event.target.dataset.id, currentUser: Id, cartId: this.cartId })
    .then((result) => {
      console.log(result);
    })

    .catch((error) => {
      this.error = error;
      console.log(error)
    });

  }


}