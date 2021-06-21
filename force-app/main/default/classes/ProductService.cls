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
    public static String addToCart(Id product, Id currentUser){
        try{
            System.debug('Current User : '+currentUser);
            System.debug('Current User : '+product);
            return 'Success';
        }
        catch(Exception e){
            throw e;
        }
        
    }

    
}
