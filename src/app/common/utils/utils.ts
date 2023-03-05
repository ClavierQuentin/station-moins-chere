export const baseUrl = "https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=&facet=id&facet=adresse&facet=prix_maj&facet=prix_nomfacet=com_code&facet=com_name&facet=com_arm_name";

export const sortBySmall = (array:any) => {
    array.sort(function (a:any,b:any){        
        if(a < b){            
            return -1        
        }else if(a == b){            
            return 0        
        } else {            
            return 1        
        }    
    });
}