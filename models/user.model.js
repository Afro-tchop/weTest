const mongoose = require('mongoose');

//création du modèle de base de données
const UserModel = mongoose.model(
    //nom de la table
    "weTestProject",
    {
        id: Number,
        first_name: {
            type: String,
            caseSensitive: false,
        },
        last_name: {
            type: String,
            createIndex: {
                unique: true,
                collation: { locale: 'fr', strength: 2 }
            }
        } ,
        email: String,
        gender: String,
        photo: String,
        connexionTime: Date
    },
    //nom de la collection
    "user"
);

module.exports = {UserModel};