public with sharing class ProductService {
    @AuraEnabled(cacheable=true)
	public static List<Store_Product__c> getProducts(){
        try{
            String query = 'SELECT Name, Image_URL__c, Price__c FROM Store_Product__c';
            List<Store_Product__c> listOfProducts = Database.query(query);
            return listOfProducts;           
        }
        catch(Exception e){
            throw e;
        }
    }

    @AuraEnabled
    public static Id createCart(Id currentUser){
        try{
            String query = 'SELECT Id FROM Cart__c WHERE (User__c = ' + '\''  + currentUser + '\''+ ')';
            if (Database.query(query).isEmpty()){
                Cart__c newCart = new Cart__c();      
                newCart.User__c = currentUser;
                insert newCart; 
                return newCart.Id;
            } else {
                return Database.query(query).Id;
            }
            
        }
        catch(Exception e){
            throw e;
        }
        
    }

    @AuraEnabled
    public static String addToCart(Id product, Id currentUser, Id cartId){
        try{
            Cart_Product__c newCartProduct = new Cart_Product__c();  
            newCartProduct.Cart__c = cartId;
            newCartProduct.Store_Product__c = product;
            insert newCartProduct;
            return 'Success';
        }
        catch(Exception e){
            throw e;
        }
        
    }

    
}
