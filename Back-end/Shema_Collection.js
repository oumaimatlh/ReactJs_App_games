const mongoose=require('mongoose') ; 


const ProduitShema=mongoose.Schema({
    id:Number , 
    nom_Produit:String 
})

const Produit=mongoose.model('Produit',ProduitShema) ;




const CommandeShema=mongoose.Schema({
    id:Number , 
    nom_Commande:String 
})

const Commande=mongoose.model('Commande',CommandeShema) ;


const UtilisateurShema=mongoose.Schema({
    nom:String, 
    email:String, 
    mot_passe:String 
})

const Utilisateur=mongoose.model('Utilisateur',UtilisateurShema) ;

module.exports={Produit , Commande , Utilisateur} ; 

