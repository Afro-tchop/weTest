const {UserModel}= require('../models/user.model');


//récupération de tous les utilisateurs
module.exports.getAllUser = (req, res) => {
    UserModel.find(req.params, (err, docs)=>{
        if(!err)
            res.send(docs);
        else 
            console.log("error: " + err);
    }).select();
}


//récupération des utilisateurs en fonction de la saisie dans l'input
module.exports.getUser = (req, res) => {
    const firstName = req.params.firstName;

    //recherche la donnée saisit dans l'input sans prendre en compte les majuscules et minuscules
    const query = { 'first_name': { $regex: new RegExp(`^${firstName}`), $options: 'i' } };

    UserModel.find(query).sort({ name: 'asc' })
        .then(user => {
            res.send(user);
        })
        .catch(error => {
            res.send(error.message);
        });
}