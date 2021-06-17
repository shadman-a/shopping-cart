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

    @AuraEnabled(cacheable=true)
    public static void addToCart(Id product, Id currentUser){
        try{
            String query = 'SELECT Name, Image_URL__c, Price__c FROM Store_Product__c';
            List<Store_Product__c> listOfProducts = Database.query(query);
            return listOfProducts;           
        }
        catch(Exception e){
            throw e;
        }
    }

    
}
