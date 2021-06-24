import { LightningElement, track } from 'lwc';
import searchZip from '@salesforce/apex/productService.makeGetCallout';


export default class HttpTest extends LightningElement {
    hood;
    state;
    long;
    lat;
    code;
    searchValue;
    show = false;
    mapMarkers;
    error;


    
  handleSearchZip(){
  searchZip({ searchValue: this.searchValue })
    .then((result) => {
      console.log(result);
      this.zipInfo = result;
      this.show = true;
      this.error = undefined; 
      this.something(result)
    })

    .catch((error) => {
      this.error = error;
    });    

    

  }

  something(result){
   this.hood = result.places[0]["place name"]
   this.state = result.places[0].state
   this.long = result.places[0].longitude
   this.lat = result.places[0].latitude
   this.code = result['post code']

   this.mapMarkers = [{
    location: {
        Latitude: this.lat,
        Longitude: this.long
    }
}]
  }

 searchKeyword(event){
    this.searchValue = event.target.value;
  } 





}